import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/authActions";
import JournalEntries from "./JournalEntries";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-1 mb-1">
          <i className="fas fa-book"></i>
          <span> Juan Camilo</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="journal__new-entry pointer">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-1">New Entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
