import {cloneDeep} from 'lodash';
import { combineReducers } from 'redux'

import records from '../records.json';
import {ADD_ENTRY, DELETE_ENTRY, PENDING_ENTRY} from './actions';

const initialState = {
  entries: records
}

let appendDayEntry = function(state, action) {
  let newState = cloneDeep(state);
  newState.entries.forEach((day) => {
    if (day.id === action.id) {
      day.entries.push(action.entry);
    }
  });
  return newState;
}

let deleteDayEntry = function(state, action) {
  let newState = cloneDeep(state);
  newState.entries.forEach((day) => {
    if (day.id === action.id) {
      day.entries = day.entries.filter(e => e.id !== action.entry.id);
    }
  });
  return newState;
}

let entries = function(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTRY:
      return appendDayEntry(state, action)
    case DELETE_ENTRY:
      return deleteDayEntry(state, action)
    default:
      return state
  }
}

let entryStatus = function(state = {status: false}, action) {
  switch (action.type) {
    case PENDING_ENTRY:
      return Object.assign({}, state, {status: action.status})
    default:
      return state
  }
}

const timeTrackerApp = combineReducers({
  entries,
  entryStatus
})

export default timeTrackerApp;
