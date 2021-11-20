import { types } from "../types/types";
import { app } from "../firebase/firebaseConfig";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { finishLoading, setError, startLoading } from "./uiActions";
import { notesLogoutCleaning } from "./notesActions";

// export const login = (uid, displayName) => {
//   return {
//     type: types.login,
//     payload: { uid, displayName },
//   };
// };

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const startLoginEmailAndPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        dispatch(finishLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(finishLoading());
      });
  };
};

export const startRegisterWithEmailPasswordAndName = (
  email,
  password,
  name
) => {
  return (dispatch) => {
    dispatch(startLoading());
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(user, { displayName: name });
        dispatch(login(user.uid, name, user.photoURL));
        dispatch(finishLoading());
      })
      .catch((err) => {
        dispatch(finishLoading());
        dispatch(setError(err.message));
      });
  };
};

export const login = (uid, displayName, photoURL) => ({
  type: types.login,
  payload: { uid, displayName, photoURL },
});

export const startGoogleLogin = () => {
  return (dispatch) => {
    dispatch(startLoading());
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        // console.log(user.displayName);
        // console.log(user.email);
        // console.log(user.uid);
        dispatch(login(user.uid, user.displayName, user.photoURL));
        dispatch(finishLoading());
      })
      .catch((err) => {
        dispatch(finishLoading());
        console.log(err);
      });
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await auth.signOut().then(() => {
      dispatch(logout());
      dispatch(notesLogoutCleaning());
    });
  };
};

export const logout = () => ({
  type: types.logout,
});
