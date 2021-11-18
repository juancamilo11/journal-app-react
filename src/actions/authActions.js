import { types } from "../types/types";
import { app } from "../firebase/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
    setTimeout(() => {
      dispatch(login(123, "Pedro"));
    }, 2000);
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});

export const startGoogleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider).then((userCredential) => {
      console.log(userCredential);
    });
  };
};
