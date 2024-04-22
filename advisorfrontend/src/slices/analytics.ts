import { Action, createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { AppThunk } from 'src/store';
import { getPerformanceMetricsFailure, getPerformanceMetricsSuccess } from './performanceMetrics';

interface SpendData {
  thisMonth: any; // Data structure as per the fetched API data for this month
  lastMonth: any; // Data structure as per the fetched API data for last month
}

interface AdDataState {
  isLoaded: boolean;
  data: SpendData | null; // Updated to hold both this month's and last month's data
  error: string | null;
}

const initialStateSpend: AdDataState = {
  isLoaded: false,
  data: null,
  error: null,
};

const spendSlice = createSlice({
  name: 'spendSlice',
  initialState: initialStateSpend,
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

interface PerformanceData {
  impressions: any;
  clicks: any;
  cpc: any;
  ctr: any;
  cpm: any;
}

interface PerformaceDataState {
  isLoaded: boolean;
  data: PerformanceData | null;
  error: string | null;
}

const initialPerformanceState: PerformaceDataState = {
  isLoaded: false,
  data: null,
  error: null,
};

const performanceSlice = createSlice({
  name: 'performanceSlice',
  initialState: initialPerformanceState,
  reducers: {
    getPerformanceMetricsSuccess(state, action: PayloadAction<PerformanceData>) {
      state.isLoaded = true;
      state.data = action.payload;
      state.error = null;
    },
    getPerformanceMetricsFailure(state, action: PayloadAction<string>) {
      state.isLoaded = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

interface AudienceData {
  reach: any; // Replace `any` with the specific data type expected from the API for reach
  frequency: any; // Replace `any` with the specific data type expected from the API for frequency
}

interface AudienceDataState {
  isLoaded: boolean;
  data: AudienceData | null;
  error: string | null;
}

const initialAudienceState: AudienceDataState = {
  isLoaded: false,
  data: null,
  error: null,
};

const audienceSlice = createSlice({
  name: 'audienceSlice',
  initialState: initialAudienceState,
  reducers: {
    getAudienceDataSuccess(state, action: PayloadAction<AudienceData>) {
      state.isLoaded = true;
      state.data = action.payload;
      state.error = null;
    },
    getAudienceDataFailure(state, action: PayloadAction<string>) {
      state.isLoaded = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { reducer, actions } = spendSlice;
export const { actions: performanceActions, reducer: performanceReducer } = performanceSlice;
export const { actions: audienceActions, reducer: audienceReducer } = audienceSlice;

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

export const fetchPerformanceData =
  (period: string): AppThunk =>
  async (dispatch) => {
    try {
      const urlBase = 'https://graph.facebook.com/v19.0/120207851692320476/insights';
      const accessToken = process.env.META_ACCESS_TOKEN;
      const fields = 'fields=impressions,clicks,cpc,ctr,cpm';
      let datePreset: string;

      // Define the API parameter based on the period
      switch (period) {
        case 'today':
          datePreset = 'today';
          break;
        case 'yesterday':
          datePreset = 'yesterday';
          break;
        case 'last_month':
          datePreset = 'last_month';
          break;
        case 'last_year':
          datePreset = 'last_year';
          break;
        default:
          datePreset = 'this_month'; // Default case if somehow an incorrect period is passed
          break;
      }

      // FETCH CURRENT PERFORMANCE DATA
      const responseCurrent = await fetch(
        `${urlBase}?date_preset=${datePreset}&access_token=${accessToken}&${fields}`
      );
      const dataCurrent = await responseCurrent.json();
      if (!responseCurrent.ok) {
        throw new Error(dataCurrent.error.message);
      }

      const performanceData: PerformanceData = {
        impressions: dataCurrent.data[0].impressions,
        clicks: dataCurrent.data[0].clicks,
        cpc: dataCurrent.data[0].cpc,
        ctr: dataCurrent.data[0].ctr,
        cpm: dataCurrent.data[0].cpm,
      };

      dispatch(performanceSlice.actions.getPerformanceMetricsSuccess(performanceData));
      toast.success('Performance data loaded successfully');
    } catch (error) {
      dispatch(performanceSlice.actions.getPerformanceMetricsFailure(error.message));
      toast.error('Failed to load performance data');
    }
  };

export const fetchAudienceData = (): AppThunk => async (dispatch) => {
  try {
    const urlBase = 'https://graph.facebook.com/v19.0/120207851692320476/insights';
    const accessToken = process.env.META_ACCESS_TOKEN;
    const fields = 'fields=reach,frequency';

    const response = await fetch(
      `${urlBase}?date_preset=this_month&access_token=${accessToken}&${fields}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error ? data.error.message : 'Failed to fetch audience data');
    }

    const audienceData: AudienceData = {
      reach: data.data[0].reach,
      frequency: data.data[0].frequency,
    };

    dispatch(audienceActions.getAudienceDataSuccess(audienceData));
    toast.success('Audience data loaded successfully');
  } catch (error) {
    dispatch(audienceActions.getAudienceDataFailure(error.message || 'An error occurred'));
    toast.error('Failed to load audience data');
  }
};
