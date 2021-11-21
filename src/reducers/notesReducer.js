/*

{
    notes:[],
    active:null,
    active:{
        id:3489CEURCU4YYMEUCY,
        title:'',
        date:2832473456347,
        country:'',
        price:,
        body:'',
    }
}

*/

import { types } from "../types/types";

export const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.notesUpdate:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };
    case types.notesLogoutCleaning:
      return { ...state, active: null, notes: [] };
    default:
      return state;
  }
};
