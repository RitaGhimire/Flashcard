// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrGavgPDKTNZQvl_CGkfn4W6_ht31UFb8",
  authDomain: "flashcardsaas-7fd78.firebaseapp.com",
  projectId: "flashcardsaas-7fd78",
  storageBucket: "flashcardsaas-7fd78.appspot.com",
  messagingSenderId: "473675514374",
  appId: "1:473675514374:web:7c78e4066a3b8ee567b987",
  measurementId: "G-R39QBS7KD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);