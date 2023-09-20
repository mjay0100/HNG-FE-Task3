// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYKkflaKkPFMoV2QuIIbUAoV0KUZdzzI4",
  authDomain: "hng-image-dnd-chagllenge.firebaseapp.com",
  projectId: "hng-image-dnd-chagllenge",
  storageBucket: "hng-image-dnd-chagllenge.appspot.com",
  messagingSenderId: "728603320604",
  appId: "1:728603320604:web:36be71459f5a5a1fe2dad9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
