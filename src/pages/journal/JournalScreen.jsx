import React from "react";
import { NothingSelected } from "./NothingSelected";
import Sidebar from "./Sidebar";

const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>
        <NothingSelected />
      </main>
    </div>
  );
};

export default JournalScreen;
