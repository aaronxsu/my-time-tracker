import {cloneDeep} from 'lodash';
import { combineReducers } from 'redux'

import records from '../records.json';
import {ADD_ENTRY, DELETE_ENTRY, PENDING_ENTRY} from './actions';

const initialState = {
  entries: records
}

const appendDayEntry = (state, action) => {
  let newState = cloneDeep(state);
  newState.forEach((day) => {
    if (day.id === action.id) {
      day.entries.push(action.entry);
    }
  });
  return newState;
}

const deleteDayEntry = (state, action) => {
  let newState = cloneDeep(state);
  newState.forEach((day) => {
    if (day.id === action.id) {
      day.entries = day.entries.filter(e => e.id !== action.entry.id);
    }
  });
  return newState;
}

const updateDatePendingStatus = (state, action) => {
  let newState = cloneDeep(state);
  newState.forEach((day) => {
    if (day.id === action.dateId) {
      day.isPending = action.status;
    }
  });
  return newState;
}

const entries = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return appendDayEntry(state, action)
    case DELETE_ENTRY:
      return deleteDayEntry(state, action)
    case PENDING_ENTRY:
      return updateDatePendingStatus(state, action)
    default:
      return state
  }
}

const timeTrackerApp = combineReducers({
  entries
})

export default timeTrackerApp;
