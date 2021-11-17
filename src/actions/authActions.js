import { types } from "../types/types";

// export const login = (uid, displayName) => {
//   return {
//     type: types.login,
//     payload: { uid, displayName },
//   };
// };

export const startLoginEmailAndPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "Pedro"));
    }, 2000);
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});
