// performanceMetricsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';



interface PerformanceMetricsState {
  isLoaded: boolean;
  data: {
    roi: number;
    ctr: number;
    costPerConversion: number;
    roiChange: number;
    ctrChange: number;
    costPerConversionChange: number;
    previousMonthData: {
      roi: number;
      ctr: number;
      costPerConversion: number;
    };
  } | null;
  error: string | null;
}

const initialState: PerformanceMetricsState = {
  isLoaded: false,
  data: null,
  error: null,
};
const slice = createSlice({
  name: 'performanceMetrics',
  initialState,
  reducers: {
    getPerformanceMetricsSuccess(state, action: PayloadAction<PerformanceMetricsState['data']>) {
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

export const { getPerformanceMetricsSuccess, getPerformanceMetricsFailure } = slice.actions;

export const { reducer } = slice;

export const fetchPerformanceMetrics = (): AppThunk => async (dispatch) => {
  try {
    // Mock data for the current month
    const currentMonthData = {
      roi: 150,
      ctr: 5,
      costPerConversion: 10,
    };

    // Mock data for the previous month
    const previousMonthData = {
      roi: 120,
      ctr: 6,
      costPerConversion: 12,
    };

    // Calculate the percentage changes
    const roiChange = ((currentMonthData.roi - previousMonthData.roi) / previousMonthData.roi) * 100;
    const ctrChange = ((currentMonthData.ctr - previousMonthData.ctr) / previousMonthData.ctr) * 100;
    const costPerConversionChange = ((currentMonthData.costPerConversion - previousMonthData.costPerConversion) / previousMonthData.costPerConversion) * 100;

    const mockData: PerformanceMetricsState['data'] = {
      ...currentMonthData,
      roiChange,
      ctrChange,
      costPerConversionChange,
      previousMonthData,
    };

    // Simulating an asynchronous request with a timeout
    setTimeout(() => {
      dispatch(getPerformanceMetricsSuccess(mockData));
    }, 1000);
  } catch (error) {
    dispatch(getPerformanceMetricsFailure(error.message));
  }
};
