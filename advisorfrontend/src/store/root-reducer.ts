import { combineReducers } from '@reduxjs/toolkit';
import {
  reducer as analyticsReducer,
  audienceGraphReducer,
  audienceReducer,
  performanceGraphReducer,
  performanceReducer,
} from 'src/slices/analytics';
import { reducer as calendarReducer } from 'src/slices/calendar';
import { reducer as mailboxReducer } from 'src/slices/mailbox';
import { reducer as projectsBoardReducer } from 'src/slices/projects_board';
import {reducer as userProfileReducer} from 'src/slices/userProfile';
import {reducer as organizationReducer} from 'src/slices/organization'
import {reducer as performanceMetricsReducer} from 'src/slices/performanceMetrics'
import {reducer as userActivitiesReducer} from 'src/slices/userActivities'
import {reducer as notificationReducer} from 'src/slices/notifications'
import {reducer as stripeReducer} from 'src/slices/stripe'
import {reducer as invitationReducer} from 'src/slices/invitations'


export const rootReducer = combineReducers({
  calendar: calendarReducer,
  projectsBoard: projectsBoardReducer,
  mailbox: mailboxReducer,
  userProfile: userProfileReducer,
  analyticsSpend: analyticsReducer,
  analyticsPerformance: performanceReducer,
  analyticsPerformanceGraph: performanceGraphReducer,
  analyticsAudience: audienceReducer,
  analyticsAudienceGraph: audienceGraphReducer,
  analytics: analyticsReducer,
  invitations: invitationReducer,
  organization: organizationReducer,
  performanceMetrics: performanceMetricsReducer,
  userActivity: userActivitiesReducer,
  notification: notificationReducer,
  stripe: stripeReducer,
});
