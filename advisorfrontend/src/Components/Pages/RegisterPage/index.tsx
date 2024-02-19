import React, { useEffect, useState } from "react";
import { Box, Button, LinearProgress, Typography, styled } from "@mui/material";
import { FormValues } from "../../../Types/FormTypes";
import BusinessGoalsStep from "../../Atoms/BusinessGoalStep";
import EmailStep from "../../Atoms/EmailStep";
import InitialMarketingGoalStep from "../../Atoms/InitialMarketinGoalStep";
import MarketingPlatformsStep from "../../Atoms/MarketingPlatformStep";
import PasswordStep from "../../Atoms/PasswordStep";
import PhoneNumberAndOTPStep from "../../Atoms/PhoneNumberAndOTPStep";
import UseCaseStep from "../../Atoms/UseCaseStep";
import useFormStepLogic from "../../../Helpers/Formik/useFormStepLogic";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const CustomBox = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "3em",
  padding: "2em",
  maxWidth: "100%",
  margin: "2 auto",
}));

const RegisterForm: React.FC = () => {
  const {
    formik,
    currentStep,
    goToNextStep,
    goToPreviousStep,
    isFinalStep,
    handleSubmit,
    setEmailExists,
    emailExists,
    cachedEmails,
    emailVerified,
    emailVerificationSent,
    setEmailVerificationSent,
  } = useFormStepLogic({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      countryCode: "+1",
      verificationCode: "",
      useCase: "personal",
      businessGoals: [],
      marketingPlatforms: [],
      initialMarketingGoal: "",
    },
    onSubmit: (values: FormValues) => {
      console.log("Form submitted:", values);
      // Handle form submission (e.g., send data to an API)
    },
  });
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Directly call Formik's handleChange to ensure the form value is updated
    formik.handleChange(event);

    // If the email field is being edited and emailExists is true, reset it
    if (emailExists) {
      setEmailExists(false);
    }
  };
  const handleEmailBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    // Directly call Formik's handleBlur to manage field touch state
    formik.handleBlur(event);

    // Check if the current email is in the list of cached emails
    if (cachedEmails.includes(formik.values.email)) {
      setEmailExists(true); // Set emailExists to true if the email is cached as existing
    } else {
      setEmailExists(false); // Otherwise, ensure emailExists is false
    }
  };

  const handleNext = () => {
    console.log(currentStep, emailVerified, emailVerificationSent);
    if (currentStep === 1 && !emailVerified && emailVerificationSent) {
      // Block the next step until the email is verified
      alert("Please verify your email before continuing.");
    } else if (currentStep === 1) {
      console.log("Submitting");
      formik.handleSubmit();
    } else {
      if (isFinalStep()) {
        formik.handleSubmit();
      } else {
        goToNextStep();
      }
    }
  };
  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <EmailStep
            formik={formik}
            handleEmailChange={handleEmailChange}
            handleEmailBlur={handleEmailBlur}
          />
        );
      case 1:
        return <PasswordStep formik={formik} />;
      case 2:
        return <UseCaseStep formik={formik} />;
      case 3:
        return <MarketingPlatformsStep formik={formik} />;
      case 4:
        return <InitialMarketingGoalStep formik={formik} />;
      case 5:
        return <BusinessGoalsStep formik={formik} />;
      case 6:
        return (
          <PhoneNumberAndOTPStep
            formik={formik}
            sendVerificationCode={async (phoneNumber: string) => {
              console.log("Sending verification code to", phoneNumber);
              // Implement sending verification code
            }}
            verifyOTP={async (otp: string) => {
              console.log("Verifying OTP", otp);
              // Implement OTP verification, return true if successful
              return true;
            }}
          />
        );
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <CustomBox onSubmit={formik.handleSubmit}>
      <LinearProgress
        variant="determinate"
        value={((currentStep + 1) / 7) * 100}
        sx={{ width: "100%", mb: 2 }}
      />
      <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        Register
      </Typography>

      {renderStepContent(currentStep)}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          width: "100%",
        }}
      >
        {currentStep > 0 && <Button onClick={goToPreviousStep}>Back</Button>}
        <Button variant="contained" onClick={handleNext} sx={{ flex: 1 }}>
          {isFinalStep() ? "Submit" : "Next"}
        </Button>
        {emailExists && (
          <Button
            variant="contained"
            sx={{ ml: 2 }}
            onClick={() => {
              // Implement redirection to the sign-in page or modal here
            }}
          >
            Sign In
          </Button>
        )}
      </Box>
      {emailVerificationSent && !emailVerified && (
        <Dialog open={true} onClose={() => setEmailVerificationSent(false)}>
          <DialogTitle>Email Verification Required</DialogTitle>
          <DialogContent>
            <Typography>
              Please check your email to verify your account before proceeding.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEmailVerificationSent(false)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </CustomBox>
  );
};

export default RegisterForm;
