// EmailStep.tsx
import React from "react";
import { Typography, TextField } from "@mui/material";
import { FormikProps } from "formik";
import { FormValues } from "../../../Types/FormTypes";
import { checkEmailExists } from "../../../Firebase/FirebaseHelper";

interface EmailStepProps {
  formik: FormikProps<FormValues>;
  onEmailExists: (exists: boolean) => void; // Adjust to pass a boolean
}

const EmailStep: React.FC<EmailStepProps> = ({ formik, onEmailExists }) => {
  const handleEmailBlur = async () => {
    const email = formik.values.email;
    if (!email || formik.errors.email) return; // Skip if email is empty or already has validation errors

    const result = await checkEmailExists(email);
    if (result.exists === null) {
      // Handle the null case explicitly. For example, you might want to log an error or set a form error indicating the check could not be completed.
      console.error("Could not verify if email exists due to an error.");
      formik.setFieldError(
        "email",
        "Could not verify email. Please try again."
      );
    } else {
      formik.setFieldError(
        "email",
        result.exists ? "Email already in use. Please sign in." : ""
      );
      onEmailExists(result.exists);
    }
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
        Let's start with your email
      </Typography>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={handleEmailBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
    </>
  );
};

export default EmailStep;
