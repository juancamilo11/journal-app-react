import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validator from "validator";
import { useDispatch } from "react-redux";
import { setError, removeError } from "../../actions/uiActions";
import { useSelector } from "react-redux";
import { startRegisterWithEmailPasswordAndName } from "../../actions/authActions";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  //const state = useSelector(state => state.state); ->Así recibimos todo el state

  //const state = useSelector(state => state.auth); ->Así recibimos sólo el auth state

  const { msgError, loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange, reset] = useForm({
    name: "Juan Camilo",
    email: "juancamilo@gmail.com",
    password: "hola12345",
    password2: "hola12345",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    const { state, message } = isFormValid();
    if (!state) {
      dispatch(setError(message));
    } else {
      dispatch(removeError());
      dispatch(startRegisterWithEmailPasswordAndName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      return { status: false, message: "Name is required" };
    } else if (!validator.isEmail(email)) {
      return { status: false, message: "Email is not valid" };
    } else if (password !== password2) {
      return { status: false, message: "Passwords have to match each other" };
    } else if (password.length < 5) {
      return { status: false, message: "must be atleast six characters long" };
    } else {
      return { state: true, message: null };
    }
  };

  return (
    <div className="auth__container auth__register-container">
      <h3 className="auth__title">Register</h3>
      {msgError && <div className="auth__alert-error">{msgError}</div>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
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
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
          onClick={handleRegister}
          disabled={loading}
        >
          Register
        </button>
        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </div>
  );
};
