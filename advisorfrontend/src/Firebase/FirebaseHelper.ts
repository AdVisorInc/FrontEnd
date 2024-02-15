// src/firebase/firebaseAuth.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { auth } from "./config";

interface CheckEmailExistsResult {
  exists: boolean | null;
  message?: string;
}

interface RegistrationResult {
  success: boolean;
  user?: UserCredential["user"];
  message?: string;
}

// Function to check if an email is already registered
export const checkEmailExists = async (
  email: string
): Promise<CheckEmailExistsResult> => {
  try {
    await signInWithEmailAndPassword(auth, email, "dummyPassword");
    console.log(auth);
    return { exists: true, message: "This email is already in use." };
  } catch (error: any) {
    if (error.code === "auth/user-not-found") {
      return { exists: false };
    } else if (error.code === "auth/wrong-password") {
      return { exists: true, message: "This email is already in use." };
    } else {
      return { exists: null, message: error.message };
    }
  }
};

// Function to create a new user with email and password
export const registerWithEmailPassword = async (
  email: string,
  password: string
): Promise<RegistrationResult> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { success: true, user: userCredential.user };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
