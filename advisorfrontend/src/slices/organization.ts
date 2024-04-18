import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'src/store';
import { createClient as createSupabaseClient } from '../utils/supabase/client';
import { sendEmail } from '../utils/email';

interface Organization {
  id: number;
  name: string;
  description: string;
  logo_url: string;
  website_url: string;
  industry: string;
  ad_accounts_count: number;
  is_active: boolean;
  owner_id: string;
}

interface Billing {
  id: number;
  organization_id: number;
  plan: string;
  subscription_id: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface OrganizationState {
  selectedOrganization: number | null;
  organizationData: Organization | null;
  organizations: Organization[];
}

const initialState: OrganizationState = {
  selectedOrganization: null,
  organizationData: null,
  organizations: [],
};

const slice = createSlice({
  name: 'organization',
  initialState,
  reducers: {
    setSelectedOrganization(state, action: PayloadAction<number>) {
      state.selectedOrganization = action.payload;
    },
    setOrganizationData(state, action: PayloadAction<Organization>) {
      state.organizationData = action.payload;
    },
    setOrganizations(state, action: PayloadAction<Organization[]>) {
      state.organizations = action.payload;
    },
  },
});

export const { reducer, actions } = slice;
export const { setSelectedOrganization, setOrganizationData, setOrganizations } = actions;

export const selectOrganizations = (state: RootState) => state.organization.organizations;
export const selectSelectedOrganization = (state: RootState) => state.organization.selectedOrganization;

// Create a new organization
export const createOrganization = (organizationData: Partial<Organization>): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      // Check if the organization name is available
      const { data: existingOrg, error: existingOrgError } = await supabaseClient
        .from('Organization')
        .select('id')
        .eq('name', organizationData.name)
        .single();

      if (existingOrgError && existingOrgError.code !== 'PGRST116') {
        throw new Error(existingOrgError.message);
      }

      if (existingOrg) {
        throw new Error('Organization name is already taken');
      }

      const { data: organization, error: insertOrgError } = await supabaseClient
        .from('Organization')
        .insert({ ...organizationData, owner_id: user.id })
        .single();

      if (insertOrgError) {
        throw new Error(insertOrgError.message);
      }

      const { error: insertMemberError } = await supabaseClient
        .from('OrganizationMember')
        .insert({
          organization_id: organization.id,
          user_id: user.id,
          role_id: 1, // Assuming role_id 1 is for the owner role
        });

      if (insertMemberError) {
        throw new Error(insertMemberError.message);
      }

      const { error: insertBillingError } = await supabaseClient
        .from('Billing')
        .insert({
          organization_id: organization.id,
          plan: 'free', // Set the default plan for new organizations
          status: 'active',
        });

      if (insertBillingError) {
        throw new Error(insertBillingError.message);
      }

      dispatch(setOrganizationData(organization));
      dispatch(createOrganizationActivity(organization.id, user.id, 'organization_created'));
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    console.error('Error creating organization:', error);
    throw error;
  }
};

// Update an organization
export const updateOrganization = (organizationId: number, organizationData: Partial<Organization>): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      await dispatch(enforcePermissions(organizationId, user.id, 'update_organization'));

      const { data, error } = await supabaseClient
        .from('Organization')
        .update(organizationData)
        .eq('id', organizationId)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      dispatch(setOrganizationData(data));
      dispatch(createOrganizationActivity(organizationId, user.id, 'organization_updated', organizationData));
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    console.error('Error updating organization:', error);
    throw error;
  }
};

// Delete an organization
export const deleteOrganization = (organizationId: number): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      await dispatch(enforcePermissions(organizationId, user.id, 'delete_organization'));

      const { error: deleteOrgError } = await supabaseClient
        .from('Organization')
        .delete()
        .eq('id', organizationId);

      if (deleteOrgError) {
        throw new Error(deleteOrgError.message);
      }

      const { error: deleteMembersError } = await supabaseClient
        .from('OrganizationMember')
        .delete()
        .eq('organization_id', organizationId);

      if (deleteMembersError) {
        throw new Error(deleteMembersError.message);
      }

      const { error: deleteBillingError } = await supabaseClient
        .from('Billing')
        .delete()
        .eq('organization_id', organizationId);

      if (deleteBillingError) {
        throw new Error(deleteBillingError.message);
      }

      dispatch(fetchUserOrganizations());
      dispatch(createOrganizationActivity(organizationId, user.id, 'organization_deleted'));
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    console.error('Error deleting organization:', error);
    throw error;
  }
};

// Fetch user's organizations
export const fetchUserOrganizations = (): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      const { data, error } = await supabaseClient
        .from('OrganizationMember')
        .select(`
          organization:organization_id (
            *,
            billing:Billing(*),
            owner:owner_id(*)
          )
        `)
        .eq('user_id', user.id);

      if (error) {
        throw new Error(error.message);
      }

      const organizations = data.map((member) => ({
        ...member.organization,
        billing: member.organization.billing,
        owner: member.organization.owner,
      }));

      dispatch(setOrganizations(organizations));
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    console.error('Error fetching user organizations:', error);
    throw error;
  }
};

// Invite a member to an organization
export const inviteMember = (organizationId: number, email: string, roleId: number): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      await dispatch(enforcePermissions(organizationId, user.id, 'invite_member'));

      const { data: invitedUser, error: userError } = await supabaseClient
        .from('User')
        .select('id, email')
        .eq('email', email)
        .single();

      if (userError && userError.code !== 'PGRST116') {
        throw new Error(userError.message);
      }

      if (invitedUser) {
        const { error: memberError } = await supabaseClient
          .from('OrganizationMember')
          .insert({
            organization_id: organizationId,
            user_id: invitedUser.id,
            role_id: roleId,
          });

        if (memberError) {
          throw new Error(memberError.message);
        }

        // Send invitation email
        await sendEmail({
          to: invitedUser.email,
          subject: 'Organization Invitation',
          body: `You have been invited to join an organization on our platform.`,
        });
      } else {
        // TODO: Handle invitation for non-registered users (e.g., send invitation link)
        console.log('User not found. Sending invitation link...');
      }

      dispatch(fetchUserOrganizations());
      dispatch(createOrganizationActivity(organizationId, user.id, 'member_invited', { email }));
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    console.error('Error inviting member:', error);
    throw error;
  }
};

// Update billing information for an organization
export const updateBilling = (organizationId: number, billingData: Partial<Billing>): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      await dispatch(enforcePermissions(organizationId, user.id, 'update_billing'));

      const { data: billing, error: selectError } = await supabaseClient
        .from('Billing')
        .select('id')
        .eq('organization_id', organizationId)
        .single();

      if (selectError && selectError.code !== 'PGRST116') {
        throw new Error(selectError.message);
      }

      if (billing) {
        const { error: updateError } = await supabaseClient
          .from('Billing')
          .update(billingData)
          .eq('id', billing.id);

        if (updateError) {
          throw new Error(updateError.message);
        }
      } else {
        const { error: insertError } = await supabaseClient
          .from('Billing')
          .insert({
            organization_id: organizationId,
            ...billingData,
          });

        if (insertError) {
          throw new Error(insertError.message);
        }
      }

      // TODO: Handle billing update with Stripe

      dispatch(fetchUserOrganizations());
      dispatch(createOrganizationActivity(organizationId, user.id, 'billing_updated', billingData));
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    console.error('Error updating billing:', error);
    throw error;
  }
};

// Enforce role-based permissions for organization members
export const enforcePermissions = (organizationId: number, userId: string, permissionName: string): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();

    const { data: member, error: memberError } = await supabaseClient
      .from('OrganizationMember')
      .select(`
        role:Role (
          permissions:RolePermission (
            permission:Permission (
              name
            )
          )
        )
      `)
      .eq('organization_id', organizationId)
      .eq('user_id', userId)
      .single();

    if (memberError) {
      throw new Error(memberError.message);
    }

    const hasPermission = member.role.permissions.some(
      (rolePermission) => rolePermission.permission.name === permissionName
    );

    if (!hasPermission) {
      throw new Error('User does not have the required permission');
    }
  } catch (error) {
    console.error('Error enforcing permissions:', error);
    throw error;
  }
};

// Helper function to create organization activity records
export const createOrganizationActivity = (organizationId: number, userId: string, activityType: string, metadata?: Record<string, any>): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();

    const { error } = await supabaseClient
      .from('OrganizationActivity')
      .insert({
        organization_id: organizationId,
        user_id: userId,
        activity_type: activityType,
        timestamp: new Date().toISOString(),
        metadata,
      });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error('Error creating organization activity:', error);
    throw error;
  }
};

// Update billing plan for an organization
export const updateBillingPlan = (organizationId: number, plan: string): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      await dispatch(enforcePermissions(organizationId, user.id, 'update_billing_plan'));

      const { data: billing, error: fetchError } = await supabaseClient
        .from('Billing')
        .select('id, plan')
        .eq('organization_id', organizationId)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        throw new Error(fetchError.message);
      }

      if (billing) {
        if (billing.plan === plan) {
          throw new Error('The selected plan is already active');
        }

        const { error: updateError } = await supabaseClient
          .from('Billing')
          .update({ plan })
          .eq('id', billing.id);

        if (updateError) {
          throw new Error(updateError.message);
        }
      } else {
        const { error: insertError } = await supabaseClient
          .from('Billing')
          .insert({
            organization_id: organizationId,
            plan,
            status: 'active',
          });

        if (insertError) {
          throw new Error(insertError.message);
        }
      }

      // TODO: Handle billing plan update with Stripe

      dispatch(createOrganizationActivity(organizationId, user.id, 'billing_plan_updated', { plan }));
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    console.error('Error updating billing plan:', error);
    throw error;
  }
};

// Cancel billing subscription for an organization
export const cancelBillingSubscription = (organizationId: number): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      await dispatch(enforcePermissions(organizationId, user.id, 'cancel_billing_subscription'));

      const { data: billing, error: fetchError } = await supabaseClient
        .from('Billing')
        .select('id, status')
        .eq('organization_id', organizationId)
        .single();

      if (billing) {
        if (billing.status === 'canceled') {
          throw new Error('The billing subscription is already canceled');
        }

        const { error: updateError } = await supabaseClient
          .from('Billing')
          .update({ status: 'canceled' })
          .eq('id', billing.id);

        if (updateError) {
          throw new Error(updateError.message);
        }

        // TODO: Handle subscription cancellation with Stripe

        dispatch(createOrganizationActivity(organizationId, user.id, 'billing_subscription_canceled'));
      } else {
        throw new Error('No active billing subscription found');
      }
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    console.error('Error canceling billing subscription:', error);
    throw error;
  }
};
