// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_APIKEY,
    // authDomain: import.meta.env.VITE_AUTHDOMAIN,
    // projectId: import.meta.env.VITE_VITE_PEOJECTID,
    // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    // appId: import.meta.env.VITE_APPID

  apiKey: "AIzaSyBTynSGN-Pmr79XbFzk3vYA5-DZKIYK054",
  authDomain: "booking-college-57850.firebaseapp.com",
  projectId: "booking-college-57850",
  storageBucket: "booking-college-57850.appspot.com",
  messagingSenderId: "520786006282",
  appId: "1:520786006282:web:44439519c70a2a13bfeaf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
