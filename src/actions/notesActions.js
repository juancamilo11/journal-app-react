import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { database } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { uploadFileToCloudinary } from "./cloudinaryHelpers";
import { loadNotes } from "./notesHelpers";
import Swal from "sweetalert2";

export const startAddNewNote = () => {
  return async (dispatch, getState) => {
    const { auth } = getState();

    const newNote = {
      title: "",
      date: "",
      country: "",
      price: "",
      body: "",
    };

    try {
      const docRef = await addDoc(
        collection(database, `${auth.uid}/journal/notes`),
        newNote
      );
      dispatch(activeNote(docRef.id, newNote));
    } catch (err) {
      console.log("error: " + err);
    }
  };
};

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const noteDocRef = doc(database, `${uid}/journal/notes/${note.id}`);

    await updateDoc(noteDocRef, noteToFirestore);
    dispatch(refreshNote(note.id, noteToFirestore));
  };
};

export const startUploadingImage = (file) => {
  return async (dispatch, getState) => {
    const { active: activedNote } = getState().notes;

    Swal.fire({
      title: "Uploading your Image",
      text: "Please Wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const fileURL = await uploadFileToCloudinary(file);
    activedNote.url = fileURL;

    dispatch(startSaveNote(activedNote));

    Swal.close();
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdate,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const notesLogoutCleaning = () => ({
  type: types.notesLogoutCleaning,
});

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: { id, ...note },
});

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});
