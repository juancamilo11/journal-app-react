import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notesActions";

const JournalEntry = ({ id, title, body, date, url }) => {
  const noteDate = moment(date);

  const dispatch = useDispatch();

  const handleSelectNote = () => {
    dispatch(activeNote(id, { title, body, date, url }));
  };

  return (
    <div className="journal__entry pointer" onClick={handleSelectNote}>
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
