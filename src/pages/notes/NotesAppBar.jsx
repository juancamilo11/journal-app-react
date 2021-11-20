import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploadingImage } from "../../actions/notesActions";

const NotesAppBar = () => {
  const [noteLocked, setNoteLocked] = useState(true);
  const [noteSaved, setNoteSaved] = useState(true);
  const [time, setTime] = useState(new Date());

  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
    setNoteSaved(true);
    setNoteLocked(true);
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

  const handleLockNote = (value) => {
    setNoteLocked(value);
    setNoteSaved(false);
  };

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="notes__appbar">
      <span>{time.toLocaleString()}</span>
      <div>
        <input
          id="fileSelector"
          name="file"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        {noteLocked ? (
          <button className="btn mr-3" onClick={() => handleLockNote(false)}>
            <i class="fas fa-lock-open  mr-1"></i> Unlock Note
          </button>
        ) : (
          <>
            {noteSaved && (
              <button className="btn mr-3" onClick={() => handleLockNote(true)}>
                <i class="fas fa-lock mr-1"></i> Lock Note
              </button>
            )}
            <button className="btn mr-3" onClick={handleUploadPicture}>
              Upload Picture
            </button>
            <button className="btn" onClick={handleSave}>
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NotesAppBar;
