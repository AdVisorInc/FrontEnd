import React, { ChangeEvent, FC } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "../../../store/useAuthStore";
import PasswordRequirements from "../../Atoms/PasswordRequirements";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .matches(/.{8,}/, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "At least one uppercase letter")
    .matches(/[a-z]/, "At least one lowercase letter")
    .matches(/[0-9]/, "At least one number")
    .matches(/[@$!%*?&_]/, "At least one special character (@$!%*?&_)")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const SignupForm: FC<{
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsSignup }) => {
  const { signupUser, loading } = useAuthStore();

  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    const { setSubmitting } = formikHelpers;
    const success = await signupUser(values.email, values.password, "User");
    if (success) {
      alert(
        "Signup successful. Please check your email to verify your account."
      );
      setIsSignup(false); // Optionally toggle back to the login form
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form>
          <Box
            sx={{ maxWidth: "35em", padding: "3em", margin: "auto" }}
            display="flex"
            flexDirection="column"
            gap="2em"
          >
            <Typography variant="h6">Sign Up</Typography>
            <Field
              as={TextField}
              label="Email"
              name="email"
              fullWidth
              margin="normal"
            />
            <ErrorMessage name="email">
              {(msg) => <Typography color="error">{msg}</Typography>}
            </ErrorMessage>{" "}
            <Field
              as={TextField}
              type="password"
              label="Password"
              name="password"
              fullWidth
              margin="normal"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFieldValue("password", e.target.value)
              }
            />
            <ErrorMessage name="password">
              {(msg) => <Typography color="error">{msg}</Typography>}
            </ErrorMessage>
            <PasswordRequirements password={values.password} />
            <Field
              as={TextField}
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              fullWidth
              margin="normal"
            />
            <ErrorMessage name="confirmPassword">
              {(msg) => <Typography color="error">{msg}</Typography>}
            </ErrorMessage>
            {loading && <CircularProgress />}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting || loading}
            >
              Sign Up
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
