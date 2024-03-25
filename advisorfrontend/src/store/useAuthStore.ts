// src/store/useAuthStore.ts
import { create } from "zustand";

import { auth } from "../Firebase/config"; // Ensure this points to your Firebase config file
import {
  signInWithEmailAndPassword,
  signOut,
  User,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { firebaseErrorToMessage } from "../utils/firebaseErrorToMessage";

interface AuthState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  emailVerified: boolean;
  loginUser: (
    email: string,
    password: string,
    rememberMe: boolean
  ) => Promise<void>;
  signupUser: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<boolean>;
  logoutUser: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  sendVerificationEmail: () => Promise<void>;
  updateUserProfile: (displayName: string, photoURL?: string) => Promise<void>;
  resendVerificationEmail: () => Promise<void>;
  lastEmailSentTime: number | null;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  currentUser: null,
  loading: false,
  error: null,
  emailVerified: false,
  lastEmailSentTime: null,
  loginUser: async (email: string, password: string, rememberMe: boolean) => {
    set({ loading: true, error: null });
    try {
      const currentUser = get().currentUser;
      console.log(currentUser);
      if (currentUser && currentUser.email !== email) {
        await signOut(auth);
      }

      const persistence = rememberMe
        ? browserLocalPersistence
        : browserSessionPersistence;
      await setPersistence(auth, persistence);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      if (!userCredential.user.emailVerified) {
        await signOut(auth); // Consider signing out immediately if email isn't verified
        set({
          error: "Please verify your email before logging in.",
          loading: false,
        });
      } else {
        set({
          currentUser: userCredential.user,
          loading: false,
          emailVerified: userCredential.user.emailVerified,
        });
      }
    } catch (error: any) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        set({ error: "Invalid login credentials.", loading: false });
      } else if (error.code === "auth/too-many-requests") {
        set({
          error: "Too many attempts. Please try again later.",
          loading: false,
        });
      } else {
        set({ error: firebaseErrorToMessage(error.code), loading: false });
      }
    }
  },
  signupUser: async (
    email: string,
    password: string,
    displayName: string
  ): Promise<boolean> => {
    set({ loading: true, error: null });
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);
      await updateProfile(userCredential.user, { displayName });

      await signOut(auth);

      set({
        currentUser: null,
        loading: false,
        emailVerified: false,
      });
      return true;
    } catch (error: any) {
      set({ error: firebaseErrorToMessage(error.code), loading: false });
      return false;
    }
  },
  logoutUser: async () => {
    set({ loading: true });
    try {
      await signOut(auth);
      set({ currentUser: null, loading: false, emailVerified: false });
    } catch (error: any) {
      set({ error: firebaseErrorToMessage(error.code), loading: false });
    }
  },
  loginWithGoogle: async () => {
    set({ loading: true, error: null });
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      set({
        currentUser: result.user,
        loading: false,
        emailVerified: result.user.emailVerified,
      });
    } catch (error: any) {
      set({ error: firebaseErrorToMessage(error.code), loading: false });
    }
  },
  resetPassword: async (email) => {
    set({ loading: true });
    try {
      await sendPasswordResetEmail(auth, email);
      set({
        loading: false,
        error: "Password reset email sent. Please check your inbox.",
      });
    } catch (error: any) {
      set({ error: firebaseErrorToMessage(error.code), loading: false });
    }
  },
  resendVerificationEmail: async () => {
    const currentTime = new Date().getTime();
    const lastEmailSentTime = get().lastEmailSentTime;

    if (lastEmailSentTime && currentTime - lastEmailSentTime < 60000) {
      set({
        error: "Please wait a bit before resending the verification email.",
      });
      return;
    }
    if (auth.currentUser && !auth.currentUser.emailVerified) {
      try {
        await sendEmailVerification(auth.currentUser);
        set({
          loading: false,
          error: "Verification email sent. Please check your inbox.",
          lastEmailSentTime: currentTime,
        });
      } catch (error: any) {
        set({ error: firebaseErrorToMessage(error.code), loading: false });
      }
    }
  },
  sendVerificationEmail: async () => {
    if (auth.currentUser && !auth.currentUser.emailVerified) {
      try {
        await sendEmailVerification(auth.currentUser);
        set({
          loading: false,
          error: "Verification email sent. Please check your inbox.",
        });
      } catch (error: any) {
        set({ error: firebaseErrorToMessage(error.code), loading: false });
      }
    }
  },
  updateUserProfile: async (displayName, photoURL = "") => {
    if (auth.currentUser) {
      try {
        await updateProfile(auth.currentUser, { displayName, photoURL });
        set({
          currentUser: { ...auth.currentUser, displayName, photoURL },
          loading: false,
        });
      } catch (error: any) {
        set({ error: firebaseErrorToMessage(error.code), loading: false });
      }
    }
  },
}));

onAuthStateChanged(auth, (user) => {
  useAuthStore.setState({
    currentUser: user,
    loading: false,
    emailVerified: user?.emailVerified ?? false,
  });
});
