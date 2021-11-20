import { collection, addDoc } from "firebase/firestore";
import { app, database } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const startAddNewNote = () => {
  return async (dispatch, getState) => {
    const { auth } = getState();
    console.log(auth);

    const newNote = {
      title: "titulo",
      body: "cuerpo",
      date: new Date().getTime(),
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

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: { id, ...note },
});

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});
