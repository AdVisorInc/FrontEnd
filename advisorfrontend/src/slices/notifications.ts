import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {AppThunk, RootState} from 'src/store';
import { createClient as createSupabaseClient } from '../utils/supabase/client';
import { toast } from 'react-hot-toast';
import {setNotificationUnsubscribe} from "../utils/notificationUtils";

export interface NotificationType {
  id: number;
  user_id: string;
  notification_type:
    | 'new_follower'
    | 'organization_invite'
    | 'campaign_progress_update'
    | 'campaign_ended'
    | 'new_message'
    | 'task_assigned'
    | 'meeting_scheduled'
    | 'sprint_started'
    | 'sprint_completed'
    | 'milestone_achieved'
    | 'budget_alert'
    | 'new_comment';
  data: any;
  created_at: string;
  read: boolean;
}


interface NotificationsState {
  isLoading: boolean;
  notifications: NotificationType[];
  error: string | null;
  unsubscribe: (() => void) | null;
}

const initialState: NotificationsState = {
  isLoading: false,
  notifications: [],
  error: null,
  unsubscribe: null,
};

const slice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    getNotificationsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getNotificationsSuccess(state, action: PayloadAction<NotificationType[]>) {
      state.isLoading = false;
      state.notifications = action.payload;
      state.error = null;
    },
    getNotificationsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addNotification(state, action: PayloadAction<NotificationType>) {
      state.notifications.unshift(action.payload);
    },
    markNotificationAsRead(state, action: PayloadAction<number>) {
      const notificationIndex = state.notifications.findIndex(
        (notification) => notification.id === action.payload
      );
      if (notificationIndex !== -1) {
        state.notifications[notificationIndex].read = true;
      }
    },
    setNotificationUnsubscribe(state, action: PayloadAction<() => void>) {
      state.unsubscribe = action.payload;
    },
  },
});

export const { reducer } = slice;

export const fetchNotifications = (): AppThunk => async (dispatch) => {
  try {
    dispatch(slice.actions.getNotificationsStart());

    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      const { data: notifications, error } = await supabaseClient
        .from('Notifications')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      dispatch(slice.actions.getNotificationsSuccess(notifications as NotificationType[]));
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    dispatch(slice.actions.getNotificationsFailure(error.message));
    toast.error('Failed to fetch notifications', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};
export const createNotification = (userId: string, notification_type: string, data: any): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();

    const { data: notification, error } = await supabaseClient
      .from('Notifications')
      .insert({
        user_id: userId,
        notification_type,
        data,
      })
      .select()
      .single();
    console.log(notification)
    console.log("error", error)
    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error('Error creating notification:', error.message);
    toast.error('Failed to create notification', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};
export const subscribeToNotifications = (): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      const notificationsChannel = supabaseClient
        .channel('user_notifications')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'Notifications', filter: `user_id=eq.${user.id}` },
          (payload) => {
            console.log('Received notification:', payload);
            dispatch(slice.actions.addNotification(payload.new as NotificationType));
          }
        )
        .subscribe();

      // Store the unsubscribe function separately
      setNotificationUnsubscribe(() => {
        supabaseClient.removeChannel(notificationsChannel);
      });
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    console.error('Error subscribing to notifications:', error.message);
    toast.error('Failed to subscribe to notifications', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};


export const markNotificationAsRead = (notificationId: number): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();

    const { error } = await supabaseClient.rpc('mark_notification_as_read', {
      notification_id: notificationId,
    });

    if (error) {
      throw new Error(error.message);
    }

    dispatch(slice.actions.markNotificationAsRead(notificationId));
  } catch (error) {
    console.error('Error marking notification as read:', error.message);
    toast.error('Failed to mark notification as read', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};
