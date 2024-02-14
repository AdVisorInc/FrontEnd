// RegisterForm.tsx
import React, { useState } from "react";
import { Box, Button, LinearProgress, Typography } from "@mui/material";
import useFormStepLogic from "../../../Helpers/Formik/useFormStepLogic";
import { FormValues } from "../../../Types/FormTypes";
import BusinessGoalsStep from "../../Atoms/BusinessGoalStep";
import EmailStep from "../../Atoms/EmailStep";
import InitialMarketingGoalStep from "../../Atoms/InitialMarketinGoalStep";
import MarketingPlatformsStep from "../../Atoms/MarketingPlatformStep";
import PasswordStep from "../../Atoms/PasswordStep";
import PhoneNumberAndOTPStep from "../../Atoms/PhoneNumberAndOTPStep";
import UseCaseStep from "../../Atoms/UseCaseStep";

const RegisterForm: React.FC = () => {
  const {
    formik,
    currentStep,
    goToNextStep,
    goToPreviousStep,
    isFinalStep,
    handleSubmit,
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
  const [emailExists, setEmailExists] = useState(false);

  const handleEmailExists = (exists: boolean) => {
    setEmailExists(exists);
  };
  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <EmailStep formik={formik} onEmailExists={handleEmailExists} />;
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
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ width: "100%", mt: 2 }}
    >
      <LinearProgress
        variant="determinate"
        value={((currentStep + 1) / 7) * 100}
      />
      <Typography variant="h5" sx={{ mb: 2 }}>
        Register
      </Typography>
      {renderStepContent(currentStep)}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        {currentStep > 0 && <Button onClick={goToPreviousStep}>Back</Button>}
        {!emailExists && (
          <Button
            variant="contained"
            onClick={() => (isFinalStep() ? handleSubmit() : goToNextStep())}
          >
            {isFinalStep() ? "Submit" : "Next"}
          </Button>
        )}
        {emailExists && (
          <Button
            variant="contained"
            sx={{ ml: 2 }}
            onClick={() => {
              /* Handle sign-in logic */
            }}
          >
            Sign In
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default RegisterForm;
