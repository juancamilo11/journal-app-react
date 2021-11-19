import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { login } from "../actions/authActions";
import LoginScreen from "../pages/auth/LoginScreen";
import JournalScreen from "../pages/journal/JournalScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  const [checkingAuthState, setCheckingAuthState] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setCheckingAuthState(false);
    });
  }, [dispatch, checkingAuthState]);

  if (checkingAuthState) {
    return <h1 className="auth__loading-message">Loading...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={JournalScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
