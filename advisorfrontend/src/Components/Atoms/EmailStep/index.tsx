// EmailStep.tsx
import React from "react";
import { Typography, TextField } from "@mui/material";
import { FormikProps } from "formik";
import { FormValues } from "../../../Types/FormTypes";
import { checkEmailExists } from "../../../Firebase/FirebaseHelper";

interface EmailStepProps {
  formik: FormikProps<FormValues>;
  handleEmailChange?: (e: React.ChangeEvent<any>) => void;
  handleEmailBlur?: (e: React.FocusEvent<any>) => void;
}
const EmailStep: React.FC<EmailStepProps> = ({
  formik,
  handleEmailChange,
  handleEmailBlur,
}) => {
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
        onChange={handleEmailChange || formik.handleChange}
        onBlur={handleEmailBlur} // Use onBlur handler
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
    </>
  );
};

export default EmailStep;
