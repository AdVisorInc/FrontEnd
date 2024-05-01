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

interface PerformanceGraphData {
  impressions: any;
  clicks: any;
  cpc: any;
  ctr: any;
  cpm: any;
}

interface PerformaceGraphDataState {
  isLoadedGraph: boolean;
  dataGraph: PerformanceGraphData | null;
  errorGraph: string | null;
}

const initialPerformanceGraphState: PerformaceGraphDataState = {
  isLoadedGraph: false,
  dataGraph: null,
  errorGraph: null,
};

const performanceGraphSlice = createSlice({
  name: 'performanceGraphSlice',
  initialState: initialPerformanceGraphState,
  reducers: {
    getPerformanceGraphMetricsSuccess(state, action: PayloadAction<PerformanceGraphData>) {
      state.isLoadedGraph = true;
      state.dataGraph = action.payload;
      state.errorGraph = null;
    },
    getPerformanceGraphMetricsFailure(state, action: PayloadAction<string>) {
      state.isLoadedGraph = false;
      state.dataGraph = null;
      state.errorGraph = action.payload;
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

interface AudienceGraphData {
  reach: any[];
  frequency: any[];
}

interface AudienceGraphDataState {
  isLoadedGraph: boolean;
  dataGraph: AudienceGraphData | null;
  errorGraph: string | null;
}

const initialAudienceGraphState: AudienceGraphDataState = {
  isLoadedGraph: false,
  dataGraph: null,
  errorGraph: null,
};

const audienceGraphSlice = createSlice({
  name: 'audienceGraphSlice',
  initialState: initialAudienceGraphState,
  reducers: {
    getAudienceGraphMetricsSuccess(state, action: PayloadAction<AudienceGraphData>) {
      state.isLoadedGraph = true;
      state.dataGraph = action.payload;
      state.errorGraph = null;
    },
    getAudienceGraphMetricsFailure(state, action: PayloadAction<string>) {
      state.isLoadedGraph = false;
      state.dataGraph = null;
      state.errorGraph = action.payload;
    },
  },
});

export const { reducer, actions } = spendSlice;
export const { actions: performanceActions, reducer: performanceReducer } = performanceSlice;
export const { actions: audienceActions, reducer: audienceReducer } = audienceSlice;
export const { actions: performanceGraphActions, reducer: performanceGraphReducer } =
  performanceGraphSlice;
export const { actions: audienceGraphActions, reducer: audienceGraphReducer } = audienceGraphSlice;

export const fetchSpendData = (): AppThunk => async (dispatch) => {
  try {
    const urlBase = 'https://graph.facebook.com/v19.0/120207851692320476/insights';
    const accessToken = process.env.NEXT_META_ACCESS_TOKEN;
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
      const accessToken = process.env.NEXT_META_ACCESS_TOKEN;
      const fields = 'fields=impressions,clicks,cpc,ctr,cpm';
      let datePreset: string;
      console.log("Testing 12", accessToken)
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
    const accessToken = process.env.NEXT_META_ACCESS_TOKEN;
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

export const fetchPerformanceGraphData =
  (period: string): AppThunk =>
  async (dispatch) => {
    try {
      const urlBase = 'https://graph.facebook.com/v19.0/120207851692320476/insights';
      const accessToken = process.env.NEXT_META_ACCESS_TOKEN;
      const fields = 'fields=impressions,clicks,cpc,ctr,cpm';
      let datePreset: string;
      let queryParams: string;
      let isHourlyBreakdown = false;

      // Define the API parameter based on the period
      switch (period) {
        case 'today':
        case 'yesterday':
          datePreset = period;
          queryParams = `breakdowns=hourly_stats_aggregated_by_advertiser_time_zone`;
          isHourlyBreakdown = true;
          break;
        case 'last_month':
        case 'last_year':
        case 'this_month':
          datePreset = period;
          queryParams = `time_increment=1`;
          break;
        default:
          datePreset = 'this_month'; // Default case if somehow an incorrect period is passed
          queryParams = `time_increment=1`;
          break;
      }

      // FETCH CURRENT PERFORMANCE DATA
      const responseCurrent = await fetch(
        `${urlBase}?date_preset=${datePreset}&access_token=${accessToken}&${fields}&${queryParams}`
      );
      const dataCurrent = await responseCurrent.json();
      if (!responseCurrent.ok) {
        throw new Error(dataCurrent.error.message);
      }

      //console.log(dataCurrent);
      //console.log('HERE');

      // Map and process each item to transform strings to numbers as appropriate
      //const transformedData = dataCurrent.data.map((dayData: any) => ({
      //  impressions: parseInt(dayData.impressions, 10),
      //  clicks: parseInt(dayData.clicks, 10),
      //  cpc: dayData.cpc ? parseFloat(parseFloat(dayData.cpc).toFixed(2)) : 0, // Handle missing 'cpc' by defaulting to 0
      //  ctr: parseFloat(parseFloat(dayData.ctr).toFixed(2)),
      //  cpm: parseFloat(parseFloat(dayData.cpm).toFixed(2)),
      //  date: dayData.date_start,
      //}));

      let transformedData = dataCurrent.data.map((dataItem: any) => ({
        impressions: parseInt(dataItem.impressions, 10),
        clicks: parseInt(dataItem.clicks, 10),
        cpc: dataItem.cpc ? parseFloat(parseFloat(dataItem.cpc).toFixed(2)) : 0,
        ctr: parseFloat(parseFloat(dataItem.ctr).toFixed(2)),
        cpm: parseFloat(parseFloat(dataItem.cpm).toFixed(2)),
        date: dataItem.date_start,
        hour: dataItem.hourly_stats_aggregated_by_advertiser_time_zone, // directly use the hour string
      }));

      // Segregate data into the PerformanceGraphData format
      const PerformanceGraphData = transformedData.reduce((acc, item) => {
        Object.keys(item).forEach((key) => {
          (acc[key] = acc[key] || []).push(item[key]);
        });
        return acc;
      }, {});

      dispatch(
        performanceGraphSlice.actions.getPerformanceGraphMetricsSuccess(PerformanceGraphData)
      );
      toast.success('Performance data loaded successfully');
    } catch (error) {
      dispatch(performanceGraphSlice.actions.getPerformanceGraphMetricsFailure(error.message));
      toast.error('Failed to load performance data');
    }
  };

export const fetchAudienceGraphData = (): AppThunk => async (dispatch) => {
  try {
    const urlBase = 'https://graph.facebook.com/v19.0/120207851692320476/insights';
    const accessToken = process.env.NEXT_META_ACCESS_TOKEN;
    const fields = 'fields=reach,frequency';
    const datePreset = 'last_7d';
    const queryParams = `time_increment=1`;
    const response = await fetch(
      `${urlBase}?date_preset=${datePreset}&${queryParams}&access_token=${accessToken}&${fields}`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error.message);
    }

    const transformedData = {
      reach: data.data.map((item: any) => parseInt(item.reach, 10)),
      frequency: data.data.map((item: any) => parseFloat(item.frequency).toFixed(2)),
    };

    dispatch(audienceGraphSlice.actions.getAudienceGraphMetricsSuccess(transformedData));
    toast.success('Audience data loaded successfully');
  } catch (error) {
    dispatch(audienceGraphSlice.actions.getAudienceGraphMetricsFailure(error.message));
    toast.error('Failed to load audience data');
  }
};
