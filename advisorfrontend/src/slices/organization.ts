import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Organization {
  id: string;
  name: string;
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

import { AppThunk } from 'src/store';

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
    const userOrganizations = [
      { id: '1', name: 'Organization 1' },
      { id: '2', name: 'Organization 2' },
      { id: '3', name: 'Organization 3' },
    ];

    dispatch(setOrganizations(userOrganizations));
  } catch (error) {
    console.error('Error fetching user organizations:', error);
  }
};
