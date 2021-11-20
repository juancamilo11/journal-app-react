import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD2jKKLNrFYjFjkgxFFSQVFoInaWlwh2Jw",
  authDomain: "my-journal-app-j3c.firebaseapp.com",
  projectId: "my-journal-app-j3c",
  storageBucket: "my-journal-app-j3c.appspot.com",
  messagingSenderId: "994286531804",
  appId: "1:994286531804:web:593601dbe29addea833019",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore();
export { app, database };
