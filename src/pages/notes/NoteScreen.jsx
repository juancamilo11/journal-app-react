import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  const { active: activedNote } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm(activedNote);
  const activeIdRef = useRef(activedNote.id);

  const { title, body } = formValues;

  useEffect(() => {
    if (activedNote.id !== activeIdRef.current) {
      reset(activedNote);
      activeIdRef.current = activedNote.id;
    }
  }, [activedNote, reset]);

  return (
    <div className="notes__main-container">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Write the title here"
          className="notes__title-input"
          autoComplete="off"
          onChange={handleInputChange}
          value={title}
        />
        <textarea
          placeholder="What's on your mind?"
          name="body"
          className="notes__textarea"
          onChange={handleInputChange}
          value={body}
        ></textarea>

        {activedNote.url && (
          <div className="notes__image">
            <img
              src="https://fotoarte.com.uy/wp-content/uploads/2019/03/Landscape-fotoarte.jpg"
              alt="landscape"
              style={{ width: "25%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteScreen;
