// EmailStep.tsx
import React from "react";
import { Typography, TextField } from "@mui/material";
import { FormikProps } from "formik";
import { FormValues } from "../../../Types/FormTypes";
import { checkEmailExists } from "../../../Firebase/FirebaseHelper";

interface EmailStepProps {
  formik: FormikProps<FormValues>;
}

const EmailStep: React.FC<EmailStepProps> = ({ formik }) => {
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
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
    </>
  );
};

export default EmailStep;
