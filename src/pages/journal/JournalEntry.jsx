import React from "react";
import moment from "moment";

const JournalEntry = ({ id, title, body, date, url }) => {
  console.log(id, title, body, date);

  const noteDate = moment(date);

  return (
    <div className="journal__entry pointer">
      {url ? (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `${url}`,
          }}
        ></div>
      ) : (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage:
              "url(https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg)",
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title">
          {title.length < 23 ? title : `${title.substring(0, 23) + "..."}`}
        </p>
        <p className="jorunal__entry-content">
          {body.length < 23 ? body : `${body.substring(0, 23) + "..."}`}
        </p>
      </div>

      <div className="journal__date-container">
        <div className="journal__entry-date-box">
          <span>{noteDate.format("dddd")}</span>
          <h5>{noteDate.format("Do")}</h5>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
