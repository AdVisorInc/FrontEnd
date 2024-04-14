import { Action, createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { AppThunk } from 'src/store';

interface AdDataState {
  isLoaded: boolean;
  data: any; // Data structure as per the fetched API data
  error: string | null;
}

const initialState: AdDataState = {
  isLoaded: false,
  data: null,
  error: null,
};

const AdSlice = createSlice({
  name: 'metaAd',
  initialState,
  reducers: {
    getAdSuccess(state, action: PayloadAction<any>) {
      state.isLoaded = true;
      state.data = action.payload;
      state.error = null;
    },
    getAdFailure(state, action: PayloadAction<string>) {
      state.isLoaded = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { reducer } = AdSlice;

// Function to perform the API call and handle the response
export const fetchAdData =
  (AdId: string): AppThunk =>
  async (dispatch) => {
    try {
      const response = await fetch(
        `https://graph.facebook.com/v19.0/${AdId}/insights?date_preset=today&access_token=EAAKbzMCDBZBMBOzvKxXYCxZBSMMp91LpgMoUBaBidQ5RuiMcsH9JZBHedYhmm3sbUSwE8DSsLr3er8SWcd0AlKPU4lt8ZCRVaKr5EeeiNX6mugsLAQ57IjlwphvP3ij68RkPxKx9ieHPdHRZCZAip9ZB9GcRZCcq1GbRTAM22mc10WkiaCoVGQr1rBcCW3CHdjoDzzD6fdeVZB1n8wGtx&fields=spend,impressions,reach,clicks,conversions,cost_per_action_type,cpc,cpm,ctr`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      dispatch(AdSlice.actions.getAdSuccess(data.data));
      toast.success('Ad data loaded successfully');
    } catch (error) {
      dispatch(AdSlice.actions.getAdFailure(error.message));
      toast.error('Failed to load Ad data');
    }
  };

export default AdSlice.reducer;
