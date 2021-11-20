/*

{
    notes:[],
    active:null,
    active:{
        id:3489CEURCU4YYMEUCY
        title:
        body:
        date:2832473456347
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
    default:
      return state;
  }
};
