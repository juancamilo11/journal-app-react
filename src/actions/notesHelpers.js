import { database } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const loadNotes = async (uid) => {
  const notes = [];
  try {
    const querySnap = await getDocs(
      collection(database, `${uid}/journal/notes`)
    );

    querySnap.forEach((snapHijo) => {
      notes.push({
        id: snapHijo.id,
        ...snapHijo.data(),
      });
    });
  } catch (err) {
    console.log("Error: ", err);
  }
  return notes;
};
