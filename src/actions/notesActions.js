import { collection, addDoc } from "firebase/firestore";
import { app, database } from "../firebase/firebaseConfig";

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
      ).then((result) => {
        console.log("Informacion guardada");
      });
      console.log(docRef);
    } catch (err) {
      console.log("error: " + err);
    }
  };
};
