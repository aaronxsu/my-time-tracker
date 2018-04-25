export const ADD_ENTRY = 'ADD_ENTRY';

// export const DISCARD_ENTRY = 'DISCARD_ENTRY';
//
export const DELETE_ENTRY = 'DELETE_ENTRY';

export const PENDING_ENTRY = 'PENDING_ENTRY';

export function addEntry(id, entry) {
  return {
    type: ADD_ENTRY,
    id,
    entry
  }
}

// export function discardEntry(entry) {
//   return {
//     type: DISCARD_ENTRY,
//     entry
//   }
// }
//
export function deleteEntry(id, entry) {
  return {
    type: DELETE_ENTRY,
    id,
    entry
  }
}

export function pendingEntry(status, dateId) {
  return {
    type: PENDING_ENTRY,
    status,
    dateId
  }
}
