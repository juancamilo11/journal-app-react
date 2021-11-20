import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploadingImage } from "../../actions/notesActions";

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handleUploadPicture = (e) => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    if (file) {
      dispatch(startUploadingImage(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>05 de agosto de 2021</span>
      <div>
        <input
          id="fileSelector"
          name="file"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <button className="btn" onClick={handleUploadPicture}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
