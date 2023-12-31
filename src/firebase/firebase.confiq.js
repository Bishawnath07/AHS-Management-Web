// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMIQjHsCr2AjyTtHeMz8dgtX82SwIb8Ug",
  authDomain: "campus-booking-hub.firebaseapp.com",
  projectId: "campus-booking-hub",
  storageBucket: "campus-booking-hub.appspot.com",
  messagingSenderId: "416848303936",
  appId: "1:416848303936:web:a9b9c293bfed869c1f4ca5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app;