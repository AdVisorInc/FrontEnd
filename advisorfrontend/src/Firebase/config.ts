// src/firebase/config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LfCL3MpAAAAAAgKg2bF_Wo88OorcUH-XblVcYm_"),
  isTokenAutoRefreshEnabled: true,
});
