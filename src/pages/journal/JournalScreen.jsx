import React from "react";
import { useSelector } from "react-redux";
import { NothingSelected } from "./NothingSelected";
import NoteScreen from "../notes/NoteScreen";
import Sidebar from "./Sidebar";

const JournalScreen = () => {
  const { notes } = useSelector((state) => state);
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>{notes.active ? <NoteScreen /> : <NothingSelected />}</main>
    </div>
  );
};

export default JournalScreen;
