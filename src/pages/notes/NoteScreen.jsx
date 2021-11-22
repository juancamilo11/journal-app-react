import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { activeNote } from "../../actions/notesActions";
import useForm from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";
import { countriesList } from "../../assets/countriesList";
import { images } from "./images";
const NoteScreen = () => {
  const { active: activedNote } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm(activedNote);
  const activeIdRef = useRef(activedNote.id);

  const { title, body, price, country, date } = formValues;

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
              autoComplete="off"
              onChange={handleInputChange}
              value={date}
            />
          </div>
        </div>

        <div className="notes__form-input-secundary">
          <div className="notes__form-input">
            <label htmlFor="country" className="notes__input-label mr-3">
              <i class="fas fa-map-marked-alt ml-3 mr-3 mt-1 notes__label-icon"></i>
              Country:
            </label>
            <select
              name="country"
              id="country"
              className="notes__country-input"
              value={country}
              onChange={handleInputChange}
            >
              <option value="co">Colombia</option>
              <option value="mx">Colombia</option>
              <option value="ar">Argentina</option>
              <option value="cl">Chile</option>
            </select>
          </div>

          <div className="notes__form-input">
            <label htmlFor="price" className="notes__input-label mr-3">
              <i class="fas fa-dollar-sign ml-3 mr-3 mt-1 notes__label-icon"></i>
              Price(USD):
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="notes__price-input"
              autoComplete="off"
              onChange={handleInputChange}
              value={price}
            />
          </div>
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

        {/* {activedNote.url && (
          <a href={activedNote.url} target="_blank" className="notes__image">
            <img
              src={activedNote.url}
              alt={activedNote.title}
              style={{ width: "25%" }}
            />
          </a>
        )} */}

        <div className="notes__img-list-container">
          {images.map((image) => (
            <a
              key={image.url}
              href={image.url}
              target="_blank"
              className="notes__image-link"
            >
              <img
                src={image.url}
                alt="imagen"
                className="notes__img-note"
                style={{ width: "25%" }}
              />
            </a>
          ))}
        </div>
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
