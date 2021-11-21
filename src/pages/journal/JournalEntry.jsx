import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notesActions";

const JournalEntry = ({ id, title, country, price, body, date, url }) => {
  const noteDate = moment(date);

  const dispatch = useDispatch();

  const handleSelectNote = () => {
    dispatch(activeNote(id, { title, country, price, body, date, url }));
  };

  return (
    <div className="journal__entry pointer" onClick={handleSelectNote}>
      {url ? (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
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
        <h3 className="journal__entry-title">{title}</h3>
        <p className="journal__entry-content">{price + " USD"}</p>
        <span className="journal__entry-description">
          {body.length < 21 ? (
            <>
              {body}{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </>
          ) : (
            body
          )}
        </span>
      </div>

      <div className="journal__date-container">
        <div className="journal__entry-date-box">
          <h5 className="journal__entry-country mt-1">
            {country || "Colombia"}
            <hr />
          </h5>
          <span>{noteDate.format("Do")}</span>
          <h6>{noteDate.format("MMMM")}</h6>
          <h4>{noteDate.format("YYYY")}</h4>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
