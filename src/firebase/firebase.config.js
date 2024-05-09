// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0VMfenHBaaBd7iRmWE6BCIGeVTCMsT6M",
  authDomain: "storyforge-31907.firebaseapp.com",
  projectId: "storyforge-31907",
  storageBucket: "storyforge-31907.appspot.com",
  messagingSenderId: "605963858352",
  appId: "1:605963858352:web:acb3ce936d0389a5d5e675"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = app
export default auth