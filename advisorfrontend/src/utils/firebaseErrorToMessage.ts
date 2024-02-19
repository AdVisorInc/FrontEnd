export const firebaseErrorToMessage = (errorCode: string): string => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "This email is already in use.";
    case "auth/weak-password":
      return "The password is too weak.";
    case "auth/user-not-found":
      return "No user found with this email.";
    case "auth/wrong-password":
      return "Incorrect password.";
    case "auth/too-many-requests":
      return "Too many requests. Try again later.";
    case "auth/invalid-credential":
      return "Invalid login credentials.";
    default:
      return "An error occurred. Please try again.";
  }
};
