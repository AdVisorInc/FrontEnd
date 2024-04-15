import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import { createClient as createSupabaseClient } from '../utils/supabase/client';
import { toast } from 'react-hot-toast';

interface UserActivity {
  id: number;
  user_id: string;
  activity_type: string;
  timestamp: string;
  metadata: any;
}

interface UserActivityState {
  isLoading: boolean;
  activities: UserActivity[];
  error: string | null;
}

const initialState: UserActivityState = {
  isLoading: false,
  activities: [],
  error: null,
};

const slice = createSlice({
  name: 'userActivity',
  initialState,
  reducers: {
    getUserActivitiesStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getUserActivitiesSuccess(state, action: PayloadAction<UserActivity[]>) {
      state.isLoading = false;
      state.activities = action.payload;
      state.error = null;
    },
    getUserActivitiesFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createUserActivitySuccess(state, action: PayloadAction<UserActivity>) {
      state.activities.unshift(action.payload);
    },
    createUserActivityFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { reducer } = slice;

export const fetchUserActivities = (): AppThunk => async (dispatch) => {
  try {
    dispatch(slice.actions.getUserActivitiesStart());

    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();
    console.log(user)
    if (user) {
      const { data: activities, error } = await supabaseClient
        .from('UserActivity')
        .select('*')
        .eq('user_id', user.id)
        .order('timestamp', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      dispatch(slice.actions.getUserActivitiesSuccess(activities as UserActivity[]));
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    dispatch(slice.actions.getUserActivitiesFailure(error.message));
    toast.error('Failed to fetch user activities', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};

export const createUserActivity = (activityData: Partial<UserActivity>): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      const { data: activity, error } = await supabaseClient
        .from('UserActivity')
        .insert({ ...activityData, user_id: user.id })
        .single();

      if (error) {
        throw new Error(error.message);
      }

      dispatch(slice.actions.createUserActivitySuccess(activity as UserActivity));

      // Trigger real-time update using Supabase Channel
      const channel = supabaseClient.channel('user-activity');
      channel
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'UserActivity' }, (payload) => {
          console.log('New user activity:', payload);
          dispatch(slice.actions.createUserActivitySuccess(payload.new as UserActivity));
        })
        .subscribe();
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    dispatch(slice.actions.createUserActivityFailure(error.message));
    toast.error('Failed to create user activity', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};
export const fetchRecentUserActivities = (): AppThunk => async (dispatch) => {
  try {
    dispatch(slice.actions.getUserActivitiesStart());

    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();
    console.log(user);
    if (user) {
      const { data: activities, error } = await supabaseClient
        .from('UserActivity')
        .select('*')
        .eq('user_id', user.id)
        .order('timestamp', { ascending: false })
        .limit(10);

      if (error) {
        throw new Error(error.message);
      }

      dispatch(slice.actions.getUserActivitiesSuccess(activities as UserActivity[]));
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    dispatch(slice.actions.getUserActivitiesFailure(error.message));
    toast.error('Failed to fetch recent user activities', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};
