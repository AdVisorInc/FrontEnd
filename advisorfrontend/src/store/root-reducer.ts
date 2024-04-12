import { combineReducers } from '@reduxjs/toolkit';
import { reducer as calendarReducer } from 'src/slices/calendar';
import { reducer as mailboxReducer } from 'src/slices/mailbox';
import { reducer as projectsBoardReducer } from 'src/slices/projects_board';
import {reducer as userProfileReducer} from 'src/slices/userProfile';
import {reducer as organizationReducer} from 'src/slices/organization'
export const rootReducer = combineReducers({
  calendar: calendarReducer,
  projectsBoard: projectsBoardReducer,
  mailbox: mailboxReducer,
  userProfile: userProfileReducer,
  organization: organizationReducer
});
