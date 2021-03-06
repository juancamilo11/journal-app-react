import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  startGoogleLogin,
  startLoginEmailAndPassword,
} from "../../actions/authActions";
import useForm from "../../hooks/useForm";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { ui } = useSelector((state) => state);
  const [formValues, handleInputChange, reset] = useForm({
    email: "pedro123@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailAndPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
    reset();
  };

  return (
    <div className="auth__container">
      <div className="text-center d-block">
        <h5>
          <img
            src={process.env.PUBLIC_URL + "/assets/login-logo.png"}
            className="hola"
            alt="hola"
          />
          <p className="bold mt-2 mb-5">Signin to create memories!</p>
        </h5>
      </div>

      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={ui.loading}
        >
          Login
        </button>
        <div className="auth__social-networks">
          <small className="text-center">or</small>
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text texttt text-center">
              <b>Sign in with google</b>
            </p>
          </div>
          pendiente: autenticacion con facebook y github
        </div>

        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </div>
  );
};

export default LoginScreen;
