// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1Dc-Ev2oGq5CBDHYik4JWTaaHe3rf82Y",
  authDomain: "school-website-2-e7ba7.firebaseapp.com",
  projectId: "school-website-2-e7ba7",
  storageBucket: "school-website-2-e7ba7.appspot.com",
  messagingSenderId: "689219667685",
  appId: "1:689219667685:web:ea71b0de4a56354527f60c",
  measurementId: "G-6C3S070381"
};

// Initialize Firebase
const ConnectionFirebase = initializeApp(firebaseConfig);
// const db = getFirestore(app);


export default ConnectionFirebase;