import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcEQsFiazaxHrzfMCqmNmzZQRMTDLQuYI",
  authDomain: "challenge-482b4.firebaseapp.com",
  projectId: "challenge-482b4",
  storageBucket: "challenge-482b4.appspot.com",
  messagingSenderId: "52269444732",
  appId: "1:52269444732:web:b7feccb670419fb951e3f9",
  measurementId: "G-S7650TD164",
};

const app = initializeApp(firebaseConfig);
export const appAuth = getAuth(app);
