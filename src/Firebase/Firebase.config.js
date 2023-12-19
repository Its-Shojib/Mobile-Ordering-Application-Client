// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-ws_82RhmW-jJqob0Qn9HonbFAM57a7M",
  authDomain: "mobile-ordering-applicat-5421d.firebaseapp.com",
  projectId: "mobile-ordering-applicat-5421d",
  storageBucket: "mobile-ordering-applicat-5421d.appspot.com",
  messagingSenderId: "795599510296",
  appId: "1:795599510296:web:c141fb00ab5a07ef71dc6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);