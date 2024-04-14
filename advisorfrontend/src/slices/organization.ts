import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Organization {
  id: number;
  name: string;
  logo_url: string;
  website_url: string;
  industry: string;
  ad_accounts_count: number;
  is_active: boolean;
}

interface OrganizationState {
  selectedOrganization: string | null;
  organizationData: any; // Replace 'any' with the actual type of organization data
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
    setSelectedOrganization(state, action: PayloadAction<string>) {
      state.selectedOrganization = action.payload;
    },
    setOrganizationData(state, action: PayloadAction<any>) {
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

import {AppThunk, RootState} from 'src/store';

export const fetchOrganizationData = (organizationId: string): AppThunk => async (dispatch) => {
  try {
    // Simulate fetching organization data based on the organizationId
    const organizationData = {
      id: organizationId,
      name: `Organization ${organizationId}`,
      // Other organization data...
    };

    dispatch(setOrganizationData(organizationData));
  } catch (error) {
    console.error('Error fetching organization data:', error);
  }
};
export const fetchUserOrganizations = (): AppThunk => async (dispatch) => {
  try {
    // Simulate fetching user's organizations from an API
    const userOrganizations: Organization[] = [
      {
        id: 1,
        name: 'Acme Inc.',
        logo_url: '/placeholders/logo/google.svg',
        website_url: 'https://acme.com',
        industry: 'Technology',
        ad_accounts_count: 5,
        is_active: true,
      },
      {
        id: 2,
        name: 'Globex Corporation',
        logo_url: '/placeholders/logo/airbnb.svg',
        website_url: 'https://globex.com',
        industry: 'Manufacturing',
        ad_accounts_count: 3,
        is_active: false,
      },
      // Add more sample organizations
    ];

    dispatch(setOrganizations(userOrganizations));
  } catch (error) {
    console.error('Error fetching user organizations:', error);
  }
};
