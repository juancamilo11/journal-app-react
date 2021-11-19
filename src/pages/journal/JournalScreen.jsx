import React from "react";
import NoteScreen from "../notes/NoteScreen";
import Sidebar from "./Sidebar";

const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>
        {/* <NothingSelected /> */}
        <NoteScreen />
      </main>
    </div>
  );
};

export default JournalScreen;
