import { Action, createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { AppThunk } from 'src/store';

interface SpendData {
  thisMonth: any; // Data structure as per the fetched API data for this month
  lastMonth: any; // Data structure as per the fetched API data for last month
}

interface AdDataState {
  isLoaded: boolean;
  data: SpendData | null; // Updated to hold both this month's and last month's data
  error: string | null;
}

const initialState: AdDataState = {
  isLoaded: false,
  data: null,
  error: null,
};

const spendSlice = createSlice({
  name: 'spendSlice',
  initialState,
  reducers: {
    getAdSuccess(state, action: PayloadAction<SpendData>) {
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

export const { reducer, actions } = spendSlice;

export const fetchSpendData = (): AppThunk => async (dispatch) => {
  try {
    const urlBase = 'https://graph.facebook.com/v19.0/120207851692320476/insights';
    const accessToken = process.env.META_ACCESS_TOKEN;
    const fields = 'fields=spend';

    // FETCH THIS MONTH DATA
    const responseThisMonth = await fetch(
      `${urlBase}?date_preset=this_month&access_token=${accessToken}&${fields}`
    );
    const dataThisMonth = await responseThisMonth.json();
    if (!responseThisMonth.ok) {
      throw new Error(dataThisMonth.error.message);
    }

    // FETCH LAST MONTH DATA
    const responseLastMonth = await fetch(
      `${urlBase}?date_preset=last_month&access_token=${accessToken}&${fields}`
    );
    const dataLastMonth = await responseLastMonth.json();
    if (!responseLastMonth.ok) {
      throw new Error(dataLastMonth.error.message);
    }

    const spendData: SpendData = {
      thisMonth: dataThisMonth.data,
      lastMonth: dataLastMonth.data,
    };

    dispatch(spendSlice.actions.getAdSuccess(spendData));
    toast.success('Ad data for both months loaded successfully');
  } catch (error) {
    dispatch(spendSlice.actions.getAdFailure(error.message));
    toast.error('Failed to load Ad data');
  }
};

// Function to perform the API call and handle the response
//export const fetchSpendData = (): AppThunk => async (dispatch) => {
//  try {
//    const response = await fetch(
//      `https://graph.facebook.com/v19.0/120207851692320476/insights?date_preset=this_month&access_token=EAAKbzMCDBZBMBOzvKxXYCxZBSMMp91LpgMoUBaBidQ5RuiMcsH9JZBHedYhmm3sbUSwE8DSsLr3er8SWcd0AlKPU4lt8ZCRVaKr5EeeiNX6mugsLAQ57IjlwphvP3ij68RkPxKx9ieHPdHRZCZAip9ZB9GcRZCcq1GbRTAM22mc10WkiaCoVGQr1rBcCW3CHdjoDzzD6fdeVZB1n8wGtx&fields=spend`
//    );
//    const data = await response.json();
//
//    if (!response.ok) {
//      throw new Error(data.error.message);
//    }
//
//    dispatch(spend.actions.getAdSuccess(data.data));
//    toast.success('Ad data loaded successfully');
//  } catch (error) {
//    dispatch(AdSlice.actions.getAdFailure(error.message));
//    toast.error('Failed to load Ad data');
//  }
//};

//interface AdDataState {
//  isLoaded: boolean;
//  data: any; // Data structure as per the fetched API data
//  error: string | null;
//}
//
//const initialState: AdDataState = {
//  isLoaded: false,
//  data: null,
//  error: null,
//};
//
//const AdSlice = createSlice({
//  name: 'metaAd',
//  initialState,
//  reducers: {
//    getAdSuccess(state, action: PayloadAction<string>) {
//      state.isLoaded = true;
//      state.data = action.payload;
//      state.error = null;
//    },
//    getAdFailure(state, action: PayloadAction<string>) {
//      state.isLoaded = false;
//      state.data = null;
//      state.error = action.payload;
//    },
//  },
//});
//
//// Function to perform the API call and handle the response
//export const fetchAdData = (): AppThunk => async (dispatch) => {
//  try {
//    const response = await fetch(
//      `https://graph.facebook.com/v19.0/120207851692320476/insights?date_preset=this_month&access_token=EAAKbzMCDBZBMBOzvKxXYCxZBSMMp91LpgMoUBaBidQ5RuiMcsH9JZBHedYhmm3sbUSwE8DSsLr3er8SWcd0AlKPU4lt8ZCRVaKr5EeeiNX6mugsLAQ57IjlwphvP3ij68RkPxKx9ieHPdHRZCZAip9ZB9GcRZCcq1GbRTAM22mc10WkiaCoVGQr1rBcCW3CHdjoDzzD6fdeVZB1n8wGtx&fields=spend,impressions,reach,clicks,conversions,cost_per_action_type,cpc,cpm,ctr`
//    );
//    const data = await response.json();
//
//    if (!response.ok) {
//      throw new Error(data.error.message);
//    }
//
//    dispatch(AdSlice.actions.getAdSuccess(data.data));
//    toast.success('Ad data loaded successfully');
//  } catch (error) {
//    dispatch(AdSlice.actions.getAdFailure(error.message));
//    toast.error('Failed to load Ad data');
//  }
//};
//
