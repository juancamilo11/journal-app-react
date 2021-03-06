import { types } from "../types/types";

/*
 if logged:
{
    uid: dkasljd23453943,
    name: Camilo
 }

 if not logged:
 {}
 */

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        photoURL: action.payload.photoURL,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};
