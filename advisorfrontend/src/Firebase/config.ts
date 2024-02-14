// src/firebase/config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC33KnJTBS0rz1tSZ9t4pd6XJpgajmui7E",
  authDomain: "advisorfrontend.firebaseapp.com",
  projectId: "advisorfrontend",
  storageBucket: "advisorfrontend.appspot.com",
  messagingSenderId: "22202495353",
  appId: "1:22202495353:web:91450e5900deda8d6f7fa8",
  measurementId: "G-XWLDH2DWP3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
