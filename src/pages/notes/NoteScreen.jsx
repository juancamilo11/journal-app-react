import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { activeNote } from "../../actions/notesActions";
import useForm from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";
import { countriesList } from "../../assets/countriesList";
import Select from "react-select";
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

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  return (
    <div className="notes__main-container">
      <NotesAppBar />
      <div className="notes__content">
        <div className="notes__form-input-main">
          <div className="notes__form-input-title">
            <label htmlFor="title" className="notes__input-label mr-3">
              <i class="fas fa-comment-medical ml-3 mr-3 mt-1 notes__label-icon"></i>
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Write the title here"
              className="notes__title-input"
              autoComplete="off"
              onChange={handleInputChange}
              value={title}
            />
          </div>
          <div className="notes__form-input-date">
            <label htmlFor="title" className="notes__input-label mr-3">
              <i class="fas fa-calendar-alt ml-3 mr-3 mt-1 notes__label-icon"></i>
              Date:
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="notes__date-input"
              placeholder="Write the title here"
              autoComplete="off"
              onChange={handleInputChange}
              value={title}
            />
          </div>
        </div>

        <div className="notes__form-input">
          <label htmlFor="country" className="notes__input-label mr-3">
            <i class="fas fa-map-marked-alt ml-3 mr-3 mt-1 notes__label-icon"></i>
            Country:
          </label>
          <Select
            name="country"
            id="country"
            className="notes__country-input"
            options={countriesList}
          />
        </div>

        <label htmlFor="country" className="notes__input-label mr-3 mt-3">
          <i class="fas fa-edit ml-3 mr-3 mt-1 notes__label-icon"></i>
          What was your experience like?
        </label>
        <textarea
          placeholder="What's on your mind?"
          name="body"
          className="notes__textarea"
          onChange={handleInputChange}
          value={body}
        ></textarea>

        {activedNote.url && (
          <a href={activedNote.url} target="_blank" className="notes__image">
            <img
              src={activedNote.url}
              alt={activedNote.title}
              style={{ width: "25%" }}
            />
          </a>
        )}
      </div>
      <a
        href="https://github.com/juancamilo11"
        className="mr-5 btn btn-link-github"
        target="_blank"
      >
        Made with Love by JuanCamiloC
      </a>
    </div>
  );
};

export default NoteScreen;
