import React from "react";
import { useSelector } from "react-redux";
import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
  const { notes } = useSelector((state) => state.notes);
  return (
    <div className="jorunal__entries">
      {notes
        .sort((note1, note2) => note1.date - note2.date)
        .map((note) => (
          <JournalEntry key={note.id} {...note} />
        ))}
    </div>
  );
};

export default JournalEntries;
