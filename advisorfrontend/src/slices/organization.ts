import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'src/store';
import { createClient as createSupabaseClient } from '../utils/supabase/client';
import toast from "react-hot-toast";

interface Organization {
  id: number;
  name: string;
  description: string;
  logo_url: string;
  website_url: string;
  industry: string;
  is_active: boolean;
  stripe_customer_id: string;
  created_at: string;
  updated_at: string;
  owner_id: string;
  settings?: Record<string, string>;
}

interface OrganizationSetting {
  id: number;
  organization_id: number;
  setting_key: string;
  setting_value: string;
  created_at: string;
  updated_at: string;
}

interface OrganizationState {
  selectedOrganization: number | null;
  organizationData: Organization | null;
  organizations: Organization[];
  createOrganizationLoading: boolean;
  createOrganizationSuccess: boolean;
  createOrganizationError: string | null;
  updateOrganizationLogoLoading: boolean;
  updateOrganizationLogoSuccess: boolean;
  updateOrganizationLogoError: string | null;
}

interface CreateOrganizationData extends Partial<Organization> {
  pricingPlan?: {
    id: string;
    name: string;
  };
  billingSettings?: {
    selectedCard?: {
      id: string;
    };
  };
  avatar?: File;
}

const initialState: OrganizationState = {
  selectedOrganization: null,
  organizationData: null,
  organizations: [],
  createOrganizationLoading: false,
  createOrganizationSuccess: false,
  createOrganizationError: null,
  updateOrganizationLogoLoading: false,
  updateOrganizationLogoSuccess: false,
  updateOrganizationLogoError: null,
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
    createOrganizationStart(state) {
      state.createOrganizationLoading = true;
      state.createOrganizationSuccess = false;
      state.createOrganizationError = null;
    },
    createOrganizationSuccess(state) {
      state.createOrganizationLoading = false;
      state.createOrganizationSuccess = true;
      state.createOrganizationError = null;
    },
    createOrganizationFailure(state, action: PayloadAction<string>) {
      console.log('Organization creation failed:', action.payload);
      state.createOrganizationLoading = false;
      state.createOrganizationSuccess = false;
      state.createOrganizationError = action.payload;
    },
    updateOrganizationLogoStart(state) {
      state.updateOrganizationLogoLoading = true;
      state.updateOrganizationLogoSuccess = false;
      state.updateOrganizationLogoError = null;
    },
    updateOrganizationLogoSuccess(state, action: PayloadAction<string>) {
      if (state.organizationData) {
        state.organizationData.logo_url = action.payload;
      }
      state.updateOrganizationLogoLoading = false;
      state.updateOrganizationLogoSuccess = true;
      state.updateOrganizationLogoError = null;
    },
    updateOrganizationLogoFailure(state, action: PayloadAction<string>) {
      state.updateOrganizationLogoLoading = false;
      state.updateOrganizationLogoSuccess = false;
      state.updateOrganizationLogoError = action.payload;
    },
  },
});

export const { reducer, actions } = slice;
export const {
  setSelectedOrganization,
  setOrganizationData,
  setOrganizations,
  createOrganizationStart,
  createOrganizationSuccess,
  createOrganizationFailure,
  updateOrganizationLogoStart,
  updateOrganizationLogoSuccess,
  updateOrganizationLogoFailure,
} = actions;

export const selectOrganizations = (state: RootState) => state.organization.organizations;
export const selectSelectedOrganization = (state: RootState) => state.organization.selectedOrganization;
export const selectCreateOrganizationLoading = (state: RootState) => state.organization.createOrganizationLoading;
export const selectCreateOrganizationSuccess = (state: RootState) => state.organization.createOrganizationSuccess;
export const selectCreateOrganizationError = (state: RootState) => state.organization.createOrganizationError;
export const createOrganization = (organizationData: CreateOrganizationData): AppThunk => async (dispatch) => {
  try {
    dispatch(createOrganizationStart());
    console.log("Starting organization creation");

    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      // Check if the organization name is available
      const isNameAvailable = await checkOrganizationNameAvailability(organizationData.name);
      console.log("Organization name availability:", isNameAvailable);

      if (!isNameAvailable) {
        throw new Error('Organization name is already taken');
      }

      // Fetch the owner role ID from the Role table
      const { data: ownerRole, error: ownerRoleError } = await supabaseClient
        .from('Role')
        .select('id')
        .eq('name', 'Owner')
        .single();

      console.log("Owner role:", ownerRole);

      if (ownerRoleError) {
        throw new Error(`Failed to fetch owner role: ${ownerRoleError.message}`);
      }

      // Start a new transaction
      const { data: transactionId, error: startTransactionError } = await supabaseClient.rpc('create_organization_transaction');
      console.log("Transaction Started", transactionId)
      if (startTransactionError) {
        throw new Error(`Failed to start transactions: ${startTransactionError.message}`);
      }

      try {
        // Create the organization record in the database
        const { data: insertedOrganization, error: insertOrgError } = await supabaseClient
          .from('Organization')
          .insert({
            name: organizationData.name,
            description: organizationData.description,
            logo_url: '', // Set initial logo URL to empty string
            owner_id: user.id,
            is_active: true,
          })
          .select()
          .single();

        console.log("Inserted organization:", insertedOrganization);

        if (insertOrgError) {
          throw new Error(`Failed to insert organization: ${insertOrgError.message}`);
        }

        const organization = insertedOrganization as Organization;

        const { data: insertedMember, error: insertMemberError } = await supabaseClient
          .from('OrganizationMember')
          .insert({
            organization_id: organization.id,
            user_id: user.id,
            role_id: ownerRole.id,
          })
          .select();

        if (insertMemberError) {
          throw new Error(`Failed to insert organization member: ${insertMemberError.message}`);
        }

        console.log("Inserted organization member:", insertedMember);

        // Store organization settings
        const { data: insertedSettings, error: insertSettingsError } = await supabaseClient
          .from('OrganizationSetting')
          .insert([
            {
              organization_id: organization.id,
              setting_key: 'pricing_plan',
              setting_value: JSON.stringify(organizationData.pricingPlan),
            },
            {
              organization_id: organization.id,
              setting_key: 'billing_card_id',
              setting_value: organizationData.billingSettings?.selectedCard?.id || '',
            },
          ])
          .select();

        if (insertSettingsError) {
          throw new Error(`Failed to insert organization settings: ${insertSettingsError.message}`);
        }

        console.log("Inserted organization settings:", insertedSettings);

        // Commit the transaction
        const { data: transactionStatus, error: transactionStatusError } = await supabaseClient.rpc('get_transaction_status', { transaction_id: transactionId });

        if (transactionStatusError) {
          throw new Error(`Failed to get transaction status: ${transactionStatusError.message}`);
        }

        if (transactionStatus === 'open') {
          // Commit the transaction if it's still open
          const { error: commitTransactionError } = await supabaseClient.rpc('commit_transaction', { transaction_id: transactionId });

          if (commitTransactionError) {
            throw new Error(`Failed to commit transaction: ${commitTransactionError.message}`);
          }
        } else {
          console.warn(`Transaction ${transactionId} is already ${transactionStatus}, skipping commit.`);
        }

        // Handle organization logo upload
        if (organizationData.avatar) {
          dispatch(updateOrganizationLogo(organization.id, organizationData.avatar));
        }

        dispatch(setOrganizationData(organization));
        dispatch(createOrganizationSuccess());
        dispatch(createOrganizationActivity(organization.id, user.id, 'organization_created'));
      } catch (error) {
        // Check the transaction status before rolling back
        const { data: transactionStatus, error: transactionStatusError } = await supabaseClient.rpc('get_transaction_status', { transaction_id: transactionId });

        if (transactionStatusError) {
          console.error(`Failed to get transactionn status: ${transactionStatusError.message}`);
        } else if (transactionStatus === 'open') {
          // Rollback the transaction if it's still open
          console.error('Error occurred during organization creation, rolling back transaction:', error);
          await supabaseClient.rpc('rollback_transaction', { transaction_id: transactionId });
        } else {
          console.warn(`Transaction ${transactionId} is already ${transactionStatus}, skipping rollback.`);
        }

        throw error;
      }
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    dispatch(createOrganizationFailure(error.message));
    console.error('Error creating organization:', error);
    toast.error('Failed to create organization', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};
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
            owner:owner_id(*),
            settings:OrganizationSetting(*)
          )
        `)
        .eq('user_id', user.id);

      if (error) {
        throw new Error(error.message);
      }

      const organizations = data.map((member: any) => ({
        ...member.organization,
        owner: member.organization.owner,
        settings: member.organization.settings.reduce((acc: Record<string, string>, setting: OrganizationSetting) => {
          acc[setting.setting_key] = setting.setting_value;
          return acc;
        }, {}),
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

export const updateOrganizationLogo = (organizationId: number, file: File): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(updateOrganizationLogoStart());
    const supabaseClient = createSupabaseClient();

    const { data: logoImages, error: listError } = await supabaseClient.storage
      .from('organization-logos')
      .list(`${organizationId}/`);

    if (listError) {
      throw new Error(listError.message);
    }
    console.log(logoImages)
    if (logoImages && logoImages.length > 0) {
      await supabaseClient.storage.from('organization-logos').remove(logoImages.map((image) => `${organizationId}/${image.name}`));
    }
    const fileName = `${Date.now()}_${file.name}`;
    const filePath = `${organizationId}/${fileName}`;

    const { data, error } = await supabaseClient.storage
      .from('organization-logos')
      .upload(filePath, file);

    if (error) {
      throw new Error(error.message);
    }

    const { data: { publicUrl } } = supabaseClient.storage
      .from('organization-logos')
      .getPublicUrl(filePath);

    const { error: updateError } = await supabaseClient
      .from('Organization')
      .update({ logo_url: publicUrl })
      .eq('id', organizationId);

    if (updateError) {
      throw new Error(updateError.message);
    }

    dispatch(updateOrganizationLogoSuccess(publicUrl));
    toast.success('Organization logo updated successfully', {
      position: 'bottom-left',
      style: {
        background: '#4caf50',
        color: '#fff',
      },
    });
    dispatch(createOrganizationActivity(organizationId, getState().userProfile.data?.uuid || '', 'organization_logo_updated', { url: publicUrl }));
  } catch (error) {
    dispatch(updateOrganizationLogoFailure(error.message));
    console.error('Error updating organization logo:', error.message);
    toast.error('Failed to update organization logo', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};

export const checkOrganizationNameAvailability = async (name: string): Promise<boolean> => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: existingOrg, error: existingOrgError } = await supabaseClient
      .from('Organization')
      .select('id')
      .eq('name', name)
      .single();

    if (existingOrgError && existingOrgError.code !== 'PGRST116') {
      throw new Error(existingOrgError.message);
    }

    return !existingOrg;
  } catch (error) {
    console.error('Error checking organization name availability:', error);
    throw error;
  }
};
