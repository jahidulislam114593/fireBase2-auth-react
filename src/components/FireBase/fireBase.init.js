// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYxEi3G3E6DRPcvQLH1XHYArsE3R49Ykw",
  authDomain: "fir-2-react-auth-d1b25.firebaseapp.com",
  projectId: "fir-2-react-auth-d1b25",
  storageBucket: "fir-2-react-auth-d1b25.appspot.com",
  messagingSenderId: "762652686389",
  appId: "1:762652686389:web:8456a87182439c4af2997c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
