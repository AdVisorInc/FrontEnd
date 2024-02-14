// PasswordStep.tsx
import React from "react";
import { Typography, TextField } from "@mui/material";
import PasswordRequirements from "../../Atoms/PasswordRequirements"; // Assuming this component is correctly implemented
import { FormikProps } from "formik";
import { FormValues } from "../../../Types/FormTypes";

interface PasswordStepProps {
  formik: FormikProps<FormValues>;
}

const PasswordStep: React.FC<PasswordStepProps> = ({ formik }) => {
  return (
    <>
      <Typography>Create a strong password</Typography>
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <PasswordRequirements password={formik.values.password} />
      <TextField
        fullWidth
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
      />
    </>
  );
};

export default PasswordStep;
