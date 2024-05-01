// invitations.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk, RootState } from 'src/store';
import { createClient as createSupabaseClient } from '../utils/supabase/client';
import { toast } from 'react-hot-toast';
import { createNotification } from './notifications';
import { v4 as uuidv4 } from 'uuid';
import {User} from "../mocks/users";

export interface Invitation {
  id: number;
  organization_id: number;
  email: string;
  role_id: number;
  status: 'pending' | 'accepted' | 'declined' | 'expired' | 'cancelled';
  created_at: string;
  updated_at: string;
  expires_at: string | null;
  token: string;
}

interface InvitationsState {
  isLoading: boolean;
  invitations: Invitation[];
  error: string | null;
  invitationSentSuccess: boolean;
}

const initialState: InvitationsState = {
  isLoading: false,
  invitations: [],
  error: null,
  invitationSentSuccess: false,
};

const slice = createSlice({
  name: 'invitations',
  initialState,
  reducers: {
    getInvitationsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getInvitationsSuccess(state, action: PayloadAction<Invitation[]>) {
      state.isLoading = false;
      state.invitations = action.payload;
      state.error = null;
    },
    getInvitationsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addInvitation(state, action: PayloadAction<Invitation>) {
      state.invitations.push(action.payload);
    },
    updateInvitationStatus(state, action: PayloadAction<{ id: number; status: Invitation['status'] }>) {
      const invitationIndex = state.invitations.findIndex(
        (invitation) => invitation.id === action.payload.id
      );
      if (invitationIndex !== -1) {
        state.invitations[invitationIndex].status = action.payload.status;
      }
    },
    invitationSentSuccess(state) {
      state.invitationSentSuccess = true;
    },
    resetInvitationSentSuccess(state) {
      state.invitationSentSuccess = false;
    },
    cancelInvitationStart(state) {},
    cancelInvitationSuccess(state, action: PayloadAction<number>) {
      const invitationIndex = state.invitations.findIndex((invitation) => invitation.id === action.payload);
      if (invitationIndex !== -1) {
        state.invitations.splice(invitationIndex, 1);
      }
    },
    cancelInvitationFailure(state, action: PayloadAction<string>) {
      console.error('Error canceling invitation:', action.payload);
    },
  },
});

export const { reducer, actions } = slice;
export const {
  invitationSentSuccess,
  resetInvitationSentSuccess,
  updateInvitationStatus,
  cancelInvitationStart,
  cancelInvitationSuccess,
  cancelInvitationFailure,
} = actions;

export const fetchInvitations = (organizationId: number): AppThunk => async (dispatch) => {
  try {
    dispatch(slice.actions.getInvitationsStart());

    const supabaseClient = createSupabaseClient();
    const { data: invitations, error } = await supabaseClient
      .from('Invitation')
      .select('*')
      .eq('organization_id', organizationId);

    if (error) {
      throw new Error(error.message);
    }

    dispatch(slice.actions.getInvitationsSuccess(invitations as Invitation[]));
  } catch (error) {
    dispatch(slice.actions.getInvitationsFailure(error.message));
    toast.error('Failed to fetch invitations', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};

export const sendInvitation = (
  organizationId: number,
  email: string,
  roleId: number,
  inviterName: string,

): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();

    // Check if the user exists in the database
    const { data: existingUser, error: existingUserError } = await supabaseClient
      .from('User')
      .select('uuid')
      .eq('email', email)
      .single();
    console.log(existingUser)
    if (existingUserError && existingUserError.code !== 'PGRST116') {
      throw new Error(existingUserError.message);
    }
    const { data: existingInvitation, error: existingInvitationError } = await supabaseClient
      .from('Invitation')
      .select('id')
      .eq('email', email)
      .eq('organization_id', organizationId)
      .eq('status', 'pending')
      .single();

    if (existingInvitationError && existingInvitationError.code !== 'PGRST116') {
      throw new Error(existingInvitationError.message);
    }

    if (existingInvitation) {
      // An invitation already exists for the user in the organization
      toast.error('An invitation has already been sent to this user', {
        position: 'bottom-left',
        style: {
          background: '#f44336',
          color: '#fff',
        },
      });
      return;
    }

    const token = generateInvitationToken();
    console.log(token)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // Set expiration to 7 days from now

    const { data: invitation, error: invitationError } = await supabaseClient
      .from('Invitation')
      .insert({
        organization_id: organizationId,
        email,
        role_id: roleId,
        token,
        expires_at: expiresAt.toISOString(), // Set the expiration date
      })
        .select()
        .single();
    console.log(invitation)
    if (invitationError) {
      throw new Error(invitationError.message);
    }
    const { error: memberError } = await supabaseClient
      .from('OrganizationMember')
      .insert({
        organization_id: organizationId,
        user_id: existingUser ? (existingUser as User).uuid : null,
        role_id: roleId,
        invitation_id: (invitation as Invitation).id,
      });

    if (memberError) {
      throw new Error(memberError.message);
    }
    dispatch(slice.actions.addInvitation(invitation as Invitation));
    if (existingUser) {
      // User exists, send a notification
      const notificationData = {
        invitation_id: (invitation as Invitation).id,
        organization_id: organizationId,
        role_id: roleId,
      };
      await dispatch(createNotification((existingUser as User).uuid, 'organization_invite', notificationData));
      console.log("Created notification")
    }

    // Generate a unique link for account creation or invitation acceptance
    const signUpLink = `https://yourapp.com/invite?token=${token}`;

    // Send the email with the unique link
    //await sendInvitationEmail(email, signUpLink, inviterName, organizationName);
    console.log("Sent Invitation email")
    toast.success('Invitation sent successfully', {
      position: 'bottom-left',
      style: {
        background: '#4caf50',
        color: '#fff',
      },
    });
    dispatch(slice.actions.invitationSentSuccess());
  } catch (error) {
    console.error('Error sending invitation:', error.message);
    toast.error('Failed to send invitation', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};
export const acceptInvitation = (invitationToken: string): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (!user) {
      throw new Error('User not authenticated');
    }

    const { data: invitation, error: invitationError } = await supabaseClient
      .from('Invitation')
      .select('*')
      .eq('token', invitationToken)
      .single();

    if (invitationError) {
      throw new Error(invitationError.message);
    }

    if (invitation.status !== 'pending') {
      throw new Error('Invitation is not in pending status');
    }

    const { error: memberError } = await supabaseClient
      .from('OrganizationMember')
      .insert({
        organization_id: invitation.organization_id,
        user_id: user.id,
        role_id: invitation.role_id,
        invitation_id: invitation.id,
      });

    if (memberError) {
      throw new Error(memberError.message);
    }

    const { error: updateError } = await supabaseClient
      .from('Invitation')
      .update({ status: 'accepted' })
      .eq('id', invitation.id);

    if (updateError) {
      throw new Error(updateError.message);
    }

    dispatch(slice.actions.updateInvitationStatus({ id: invitation.id, status: 'accepted' }));

    toast.success('Invitation accepted successfully', {
      position: 'bottom-left',
      style: {
        background: '#4caf50',
        color: '#fff',
      },
    });
  } catch (error) {
    console.error('Error accepting invitation:', error.message);
    toast.error('Failed to accept invitation', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};

export const declineInvitation = (invitationToken: string): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();

    const { data: invitation, error: invitationError } = await supabaseClient
      .from('Invitation')
      .select('*')
      .eq('token', invitationToken)
      .single();

    if (invitationError) {
      throw new Error(invitationError.message);
    }

    if (invitation.status !== 'pending') {
      throw new Error('Invitation is not in pending status');
    }

    const { error: updateError } = await supabaseClient
      .from('Invitation')
      .update({ status: 'declined' })
      .eq('id', invitation.id);

    if (updateError) {
      throw new Error(updateError.message);
    }

    const { error: deleteError } = await supabaseClient
      .from('OrganizationMember')
      .delete()
      .eq('invitation_id', invitation.id);

    if (deleteError) {
      throw new Error(deleteError.message);
    }

    dispatch(slice.actions.updateInvitationStatus({ id: invitation.id, status: 'declined' }));

    toast.success('Invitation declined successfully', {
      position: 'bottom-left',
      style: {
        background: '#4caf50',
        color: '#fff',
      },
    });
  } catch (error) {
    console.error('Error declining invitation:', error.message);
    toast.error('Failed to decline invitation', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};

const generateInvitationToken = (): string => {
  return uuidv4();
};
const sendInvitationEmail = async (
  email: string,
  signUpLink: string,
  inviterName: string,
  organizationName: string
): Promise<void> => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY;
    const apiUrl = 'https://api.sendgrid.com/v3/mail/send';

    const requestBody = {
      personalizations: [
        {
          to: [{ email }],
        },
      ],
      from: {
        email: 'no-reply@advisr.app',
      },
      subject: 'Invitation to join our organization',
      content: [
        {
          type: 'text/html',
          value: `
            <p>Hello,</p>
            <p>You have been invited by ${inviterName} to join the organization "${organizationName}" on our platform. Please click the link below to accept the invitation:</p>
            <p><a href="${signUpLink}">${signUpLink}</a></p>
            <p>If you don't have an account, you will be prompted to create one before accepting the invitation.</p>
            <p>If you have any questions or need assistance, please feel free to contact us.</p>
            <p>Best regards,<br>Advisor AI</p>
          `,
        },
      ],
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      console.log('Invitation email sent successfully');
    } else {
      const errorData = await response.json();
      console.error('Error sending invitation email:', errorData);
      throw new Error(`Failed to send invitation email. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error sending invitation email:', error);
    throw error;
  }
};
export const cancelInvitation = (invitationId: number): AppThunk => async (dispatch) => {
  try {
    dispatch(cancelInvitationStart());
    const supabaseClient = createSupabaseClient();

    const { data: invitation, error: invitationError } = await supabaseClient
      .from('Invitation')
      .select('*')
      .eq('id', invitationId)
      .single();

    if (invitationError) {
      throw new Error(invitationError.message);
    }

    if (invitation.status !== 'pending') {
      throw new Error('Invitation is not in pending status');
    }

    const { error: updateError } = await supabaseClient
      .from('Invitation')
      .update({ status: 'cancelled' })
      .eq('id', invitationId);

    if (updateError) {
      throw new Error(updateError.message);
    }

    const { error: deleteError } = await supabaseClient
      .from('OrganizationMember')
      .delete()
      .eq('invitation_id', invitationId);

    if (deleteError) {
      throw new Error(deleteError.message);
    }

    dispatch(cancelInvitationSuccess(invitationId));

    toast.success('Invitation cancelled successfully', {
      position: 'bottom-left',
      style: {
        background: '#4caf50',
        color: '#fff',
      },
    });
  } catch (error) {
    dispatch(cancelInvitationFailure(error.message));
    console.error('Error canceling invitation:', error.message);
    toast.error('Failed to cancel invitation', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};

