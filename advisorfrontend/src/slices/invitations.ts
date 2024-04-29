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
  status: 'pending' | 'accepted' | 'declined' | 'expired';
  created_at: string;
  updated_at: string;
  expires_at: string | null;
  token: string;
}

interface InvitationsState {
  isLoading: boolean;
  invitations: Invitation[];
  error: string | null;
}

const initialState: InvitationsState = {
  isLoading: false,
  invitations: [],
  error: null,
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
  },
});

export const { reducer } = slice;

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

export const sendInvitation = (organizationId: number, email: string, roleId: number): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();

    // Check if the user exists in the database
    const { data: existingUser, error: existingUserError } = await supabaseClient
      .from('User')
      .select('uuid')
      .eq('email', email)
      .single();

    if (existingUserError && existingUserError.code !== 'PGRST116') {
      throw new Error(existingUserError.message);
    }

    if (existingUser) {
      // User exists, create the invitation and send a notification
      const token = generateInvitationToken();

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
        .single();

      if (invitationError) {
        throw new Error(invitationError.message);
      }

      dispatch(slice.actions.addInvitation(invitation as Invitation));

      const notificationData = {
        invitation_id: (invitation as Invitation).id,
        organization_id: organizationId,
        role_id: roleId,
      };
      await dispatch(createNotification((existingUser as User).id, 'organization_invite', notificationData));

      toast.success('Invitation sent successfully', {
        position: 'bottom-left',
        style: {
          background: '#4caf50',
          color: '#fff',
        },
      });
    } else {
      // User doesn't exist, create the invitation and send an email with a unique link
      const token = generateInvitationToken();

      const { data: invitation, error: invitationError } = await supabaseClient
        .from('Invitation')
        .insert({
          organization_id: organizationId,
          email,
          role_id: roleId,
          token,
        })
        .single();

      if (invitationError) {
        throw new Error(invitationError.message);
      }

      dispatch(slice.actions.addInvitation(invitation as Invitation));

      // Generate a unique link for account creation and automatic organization joining
      const signUpLink = `https://yourapp.com/signup?token=${token}`;

      // Send the email with the unique link
      await sendInvitationEmail(email, signUpLink);

      toast.success('Invitation sent successfully', {
        position: 'bottom-left',
        style: {
          background: '#4caf50',
          color: '#fff',
        },
      });
    }
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
const sendInvitationEmail = async (email: string, signUpLink: string): Promise<void> => {
  try {
    // Create a transporter using your email service provider


    // Configure the email options
    const mailOptions = {
      from: 'gustavoaniceto@advisr.app', // Replace with your email address
      to: email,
      subject: 'Invitation to join our organization',
      html: `
        <p>Hello,</p>
        <p>You have been invited to join our organization. Please click the link below to create your account and join the organization:</p>
        <p><a href="${signUpLink}">${signUpLink}</a></p>
        <p>If you have any questions or need assistance, please feel free to contact us.</p>
        <p>Best regards,<br>Advisor AI</p>
      `,
    };

    // Send the email
    //await transporter.sendMail(mailOptions);
    console.log('Invitation email sent successfully');
  } catch (error) {
    console.error('Error sending invitation email:', error);
    throw error;
  }
};
export const cancelInvitation = (invitationId: number): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();

    const { error } = await supabaseClient
      .from('Invitation')
      .update({ status: 'declined' })
      .eq('id', invitationId);

    if (error) {
      throw new Error(error.message);
    }

    dispatch(slice.actions.updateInvitationStatus({ id: invitationId, status: 'declined' }));
    toast.success('Invitation canceled successfully', {
      position: 'bottom-left',
      style: {
        background: '#4caf50',
        color: '#fff',
      },
    });
  } catch (error) {
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

export const resendInvitation = (invitationId: number): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();

    const { data: invitation, error: invitationError } = await supabaseClient
      .from('Invitation')
      .select('*')
      .eq('id', invitationId)
      .single();

    if (invitationError) {
      throw new Error(invitationError.message);
    }

    const signUpLink = `https://yourapp.com/signup?token=${invitation.token}`;
    await sendInvitationEmail(invitation.email, signUpLink);

    toast.success('Invitation resent successfully', {
      position: 'bottom-left',
      style: {
        background: '#4caf50',
        color: '#fff',
      },
    });
  } catch (error) {
    console.error('Error resending invitation:', error.message);
    toast.error('Failed to resend invitation', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};
