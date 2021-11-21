import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/authActions";
import { startAddNewNote } from "../../actions/notesActions";
import JournalEntries from "./JournalEntries";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleNewEntry = () => {
    dispatch(startAddNewNote());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-1 mb-1">
          {auth?.photoURL ? (
            <img
              src={auth.photoURL}
              alt="hola"
              className="journal__img-profile"
            />
          ) : (
            <i className="fas fa-user-circle journal__logo-profile"></i>
          )}
          <span className="journal__display-name"> {auth.name}</span>
        </h3>
        <button className="btn buttons__btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="journal__new-entry pointer" onClick={handleNewEntry}>
        <i class="fas fa-plane-departure fa-5x"></i>
        <p className="mt-3 text-center">New Travel Memory</p>
      </div>

      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
