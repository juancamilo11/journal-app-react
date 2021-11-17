import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-container">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Write the title here"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What's on your mind?"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://fotoarte.com.uy/wp-content/uploads/2019/03/Landscape-fotoarte.jpg"
            alt="landscape"
            style={{ width: "25%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
