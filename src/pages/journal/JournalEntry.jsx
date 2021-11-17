import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://mk0careergirlda22ty0.kinstacdn.com/wp-content/uploads/2019/03/gratitude-journal-pink-996536_1080x-1.jpg)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día por comenzar</p>
        <p className="jorunal__entry-content">Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h5>25</h5>
      </div>
    </div>
  );
};

export default JournalEntry;
