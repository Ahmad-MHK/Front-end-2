import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1Dc-Ev2oGq5CBDHYik4JWTaaHe3rf82Y",
  authDomain: "school-website-2-e7ba7.firebaseapp.com",
  projectId: "school-website-2-e7ba7",
  storageBucket: "school-website-2-e7ba7.appspot.com",
  messagingSenderId: "689219667685",
  appId: "1:689219667685:web:ea71b0de4a56354527f60c",
  measurementId: "G-6C3S070381"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {auth}
export  {storage} ;
export default db;
