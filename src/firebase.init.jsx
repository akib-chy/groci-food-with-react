// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsm264D2Pj-p6fcZG2KZWNLFc8ZZqBSsA",
  authDomain: "groci-food.firebaseapp.com",
  projectId: "groci-food",
  storageBucket: "groci-food.appspot.com",
  messagingSenderId: "258629027322",
  appId: "1:258629027322:web:5c075c78dc72d960e55043",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
