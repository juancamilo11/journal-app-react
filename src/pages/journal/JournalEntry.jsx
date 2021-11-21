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
        <h3 className="journal__entry-title">
          {title.length < 23 ? title : `${title.substring(0, 23) + "..."}`}
        </h3>
        <p className="journal__entry-content">{price || "1200 + USD"}</p>
        <p className="journal__entry-body">
          {/* {body.length < 23 ? body : `${body.substring(0, 23) + "..."}`} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At deleniti
          nisi enim consequatur corporis fugiat a perspiciatis expedita aliquid?
          Asperiores.
        </p>
      </div>

      <div className="journal__date-container">
        <div className="journal__entry-date-box">
          <h6 className="journal__entry-country mt-1">
            {country || "Colombia"}
            <hr />
          </h6>
          <span>{noteDate.format("Do")}</span>
          <h6>{noteDate.format("MMMM")}</h6>
          <h4>{noteDate.format("YYYY")}</h4>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
