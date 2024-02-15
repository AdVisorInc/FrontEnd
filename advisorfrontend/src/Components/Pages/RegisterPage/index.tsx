// RegisterForm.tsx
import React, { useState } from "react";
import { Box, Button, LinearProgress, Typography, styled } from "@mui/material";
import useFormStepLogic from "../../../Helpers/Formik/useFormStepLogic";
import { FormValues } from "../../../Types/FormTypes";
import BusinessGoalsStep from "../../Atoms/BusinessGoalStep";
import EmailStep from "../../Atoms/EmailStep";
import InitialMarketingGoalStep from "../../Atoms/InitialMarketinGoalStep";
import MarketingPlatformsStep from "../../Atoms/MarketingPlatformStep";
import PasswordStep from "../../Atoms/PasswordStep";
import PhoneNumberAndOTPStep from "../../Atoms/PhoneNumberAndOTPStep";
import UseCaseStep from "../../Atoms/UseCaseStep";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase/config";

const stepTitles = [
  "Enter Your Email",
  "Create a Password",
  "What's Your Intent?",
  "Choose Marketing Platforms",
  "Define Your Marketing Goal",
  "Set Your Business Goal",
];
const CustomBox = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "3em",
  padding: "2em",
  maxWidth: "30em",
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
    onSubmit: async (values: FormValues) => {
      if (currentStep === 1) {
        // Assuming the password step is at index 1
        try {
          await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          setCurrentStep(currentStep + 1); // Proceed to next step if account creation is successful
        } catch (error: any) {
          if (error.code === "auth/email-already-in-use") {
            setEmailExists(true);
          } else {
            console.error("Error creating user: ", error);
          }
        }
      } else {
        setCurrentStep(currentStep + 1); // Proceed to next step for other steps
      }
    },
  });
  const [emailExists, setEmailExists] = useState(false);

  const handleEmailExists = (exists: boolean) => {
    setEmailExists(exists);
  };
  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <EmailStep formik={formik} />;
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
        {stepTitles[currentStep]}
      </Typography>
      {renderStepContent(currentStep)}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Adjust this for spacing
          alignItems: "center",
          mt: 2, // Add some margin top for spacing from the content above
          width: "100%",
        }}
      >
        {currentStep > 0 && <Button onClick={goToPreviousStep}>Back</Button>}
        {!emailExists && (
          <Button
            variant="contained"
            onClick={() => (isFinalStep() ? handleSubmit() : goToNextStep())}
            sx={{ flex: currentStep > 0 ? 0 : 1, maxWidth: "30%" }}
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
    </CustomBox>
  );
};

export default RegisterForm;
