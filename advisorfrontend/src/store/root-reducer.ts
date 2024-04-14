import { combineReducers } from '@reduxjs/toolkit';
import { reducer as analyticsReducer } from 'src/slices/analytics';
import { reducer as calendarReducer } from 'src/slices/calendar';
import { reducer as mailboxReducer } from 'src/slices/mailbox';
import { reducer as notificationReducer } from 'src/slices/notifications';
import { reducer as organizationReducer } from 'src/slices/organization';
import { reducer as performanceMetricsReducer } from 'src/slices/performanceMetrics';
import { reducer as projectsBoardReducer } from 'src/slices/projects_board';
import { reducer as userActivitiesReducer } from 'src/slices/userActivities';
import { reducer as userProfileReducer } from 'src/slices/userProfile';

export const rootReducer = combineReducers({
  calendar: calendarReducer,
  projectsBoard: projectsBoardReducer,
  mailbox: mailboxReducer,
  userProfile: userProfileReducer,
  analytics: analyticsReducer,
  organization: organizationReducer,
  performanceMetrics: performanceMetricsReducer,
  userActivity: userActivitiesReducer,
  notification: notificationReducer,
});
