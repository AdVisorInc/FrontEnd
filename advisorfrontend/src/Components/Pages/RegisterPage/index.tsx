import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  LinearProgress,
  Stack,
  Chip,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  useTheme,
  useMediaQuery,
  FormHelperText,
} from "@mui/material";
import { styled } from "@mui/system";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from "@react-oauth/google"; // Ensure this matches your Google OAuth import
import PasswordRequirements from "../../Atoms/PasswordRequirements";
const stepTitles = [
  "Enter Your Email",
  "Create a Password",
  "What's Your Intent?",
  "Choose Marketing Platforms",
  "Define Your Marketing Goal",
  "Set Your Business Goal",
];
interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  useCase: "personal" | "research" | "business";
  businessGoals: string[]; // Now an array of selected business goals
  marketingPlatforms: string[];
  initialMarketingGoal?: string;
}

const CustomBox = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "2em",
  padding: "2em",
  maxWidth: "50em",
  margin: "4em auto",
});

const marketingOptions = [
  "Facebook",
  "Google",
  "Instagram",
  "Twitter",
  "Tiktok",
];
const initialMarketingGoals = [
  "Increase Brand Awareness",
  "Generate Leads",
  "Boost Sales",
];

const steps = [
  "Email",
  "Password",
  "Usage Intent",
  "Marketing Platforms",
  "Initial Marketing Goal",
  "Business Goal",
];
const businessGoalsOptions = [
  "Expand Market Reach",
  "Enhance Customer Loyalty",
  "Increase Operational Efficiency",
  "Drive Innovation",
  "Strengthen Brand Recognition",
];
// Separate validation schemas for each step
const validationSchemas = [
  Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  }),
  Yup.object({
    password: Yup.string()
      .required("Password is required")
      .matches(/.{8,}/, "At least 8 characters")
      .matches(/[A-Z]/, "At least one uppercase letter")
      .matches(/[a-z]/, "At least one lowercase letter")
      .matches(/[0-9]/, "At least one number")
      .matches(/[@$!%*?&_]/, "At least one special character (@$!%*?&)"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirming your password is required"),
  }),
  Yup.object({
    useCase: Yup.string().required("Selecting a use case is required"),
  }),
  Yup.object({
    marketingPlatforms: Yup.array()
      .of(Yup.string())
      .min(1, "Select at least one marketing platform"),
  }),
  Yup.object({
    initialMarketingGoal: Yup.string().required(
      "Selecting an initial marketing goal is required"
    ),
  }),
  Yup.object({
    businessGoals: Yup.array()
      .of(Yup.string())
      .min(1, "Please select at least one business goal"),
  }),
];

const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOAuthSuccess, setIsOAuthSuccess] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      useCase: "personal",
      businessGoals: [],
      marketingPlatforms: [],
      initialMarketingGoal: "",
    },
    validationSchema: validationSchemas[currentStep], // Dynamic validation schema based on the current step
    onSubmit: (values) => {
      console.log(values);
      // Integration with backend to handle form submission
    },
  });

  const handleOAuthSuccess = (credentialResponse: any) => {
    console.log("OAuth Success", credentialResponse);
    setIsOAuthSuccess(true);
    setCurrentStep(2); // Skip to Usage Intent if OAuth succeeds
  };

  const handleNext = async () => {
    // Explicitly mark fields as touched for steps 3 and 4
    if (currentStep === 3) {
      formik.setFieldTouched("marketingPlatforms", true);
    } else if (currentStep === 4) {
      formik.setFieldTouched("initialMarketingGoal", true);
    }

    // Proceed with validation
    const isStepValid = await formik.validateForm().then((errors) => {
      const fieldNames = Object.keys(errors); // Get all fields that have errors
      if (fieldNames.length > 0) {
        const touchedFields: { [key: string]: boolean } = fieldNames.reduce(
          (acc, fieldName) => {
            acc[fieldName] = true;
            return acc;
          },
          {} as { [key: string]: boolean }
        );
        formik.setTouched(touchedFields, false); // Do not revalidate yet
      }
      return Object.keys(errors).length === 0;
    });

    if (isStepValid) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        formik.handleSubmit();
      }
    } else {
      // If not valid and errors should be shown, force a revalidation
      // This is useful if touching fields above does not trigger validation errors to show
      formik.validateForm();
    }
  };
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  const theme = useTheme();
  // Check if the viewport width is less than 321 pixels
  const isSmallScreen = useMediaQuery("(max-width:370px)");

  const renderStepContent = (step: number) => {
    const helperTextStyle = {
      mt: 2,
      fontSize: isSmallScreen ? "0.8rem" : "1rem",
      textAlign: "center",
      color: theme.palette.text.secondary,
    };
    switch (step) {
      case 0: // Email
        return (
          <>
            <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
              Let's start with your email
            </Typography>
            <GoogleLogin
              width={"100%"}
              size="large"
              onSuccess={handleOAuthSuccess}
              onError={() => console.log("Login Failed")}
            />
            <Typography sx={{ ...helperTextStyle, mt: 3 }}>
              Or enter your email address below
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
      case 1: // Password & Confirm Password
        return (
          <>
            <Typography sx={{ ...helperTextStyle, mt: 0 }}>
              Create a strong password
            </Typography>
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
      case 2: // Usage Intent
        return (
          <>
            <Typography sx={helperTextStyle}>
              Choose the use case that best describes your main objective.
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={formik.values.useCase}
              exclusive
              onChange={(event, newUseCase) =>
                formik.setFieldValue("useCase", newUseCase)
              }
              fullWidth
              size={isSmallScreen ? "small" : "medium"} // Dynamically adjust the size
            >
              <ToggleButton value="personal">Personal</ToggleButton>
              <ToggleButton value="research">Research</ToggleButton>
              <ToggleButton value="business">Business</ToggleButton>
            </ToggleButtonGroup>
          </>
        );
      case 3:
        return (
          <>
            <Typography sx={helperTextStyle}>
              Select one or more platforms where you plan to run your marketing
              campaigns.
            </Typography>
            <Box>
              {marketingOptions.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  onClick={() => {
                    const index =
                      formik.values.marketingPlatforms.indexOf(option);
                    if (index > -1) {
                      formik.setFieldValue(
                        "marketingPlatforms",
                        formik.values.marketingPlatforms.filter(
                          (item) => item !== option
                        )
                      );
                    } else {
                      formik.setFieldValue("marketingPlatforms", [
                        ...formik.values.marketingPlatforms,
                        option,
                      ]);
                    }
                  }}
                  color={
                    formik.values.marketingPlatforms.includes(option)
                      ? "primary"
                      : "default"
                  }
                  variant="outlined"
                  sx={{ margin: "5px" }}
                />
              ))}
              <FormHelperText sx={{ color: "red" }}>
                {formik.touched.marketingPlatforms &&
                  formik.errors.marketingPlatforms}
              </FormHelperText>
            </Box>
          </>
        );
      case 4: // Initial Marketing Goal
        return (
          <>
            <Typography sx={{ ...helperTextStyle, mt: 0 }}>
              What's your initial marketing goal?
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="initial-marketing-goal-label">
                Initial Marketing Goal
              </InputLabel>
              <Select
                labelId="initial-marketing-goal-label"
                id="initialMarketingGoal"
                value={formik.values.initialMarketingGoal}
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.setFieldTouched("initialMarketingGoal", true, false);
                }}
                name="initialMarketingGoal"
              >
                {initialMarketingGoals.map((goal) => (
                  <MenuItem key={goal} value={goal}>
                    {goal}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ color: "red" }}>
                {formik.touched.initialMarketingGoal &&
                  formik.errors.initialMarketingGoal}
              </FormHelperText>
            </FormControl>
          </>
        );
      case 5: // Business Goal
        return (
          <>
            <Typography sx={{ ...helperTextStyle, mt: 0 }}>
              Finally, select your business goals
            </Typography>
            <Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {businessGoalsOptions.map((goal) => (
                  <Chip
                    key={goal}
                    label={goal}
                    clickable
                    color={
                      formik.values.businessGoals.includes(goal)
                        ? "primary"
                        : "default"
                    }
                    onClick={() => {
                      const currentIndex =
                        formik.values.businessGoals.indexOf(goal);
                      const newBusinessGoals = [...formik.values.businessGoals];

                      if (currentIndex === -1) {
                        newBusinessGoals.push(goal); // Add to the selections
                      } else {
                        newBusinessGoals.splice(currentIndex, 1); // Remove from the selections
                      }

                      formik.setFieldValue("businessGoals", newBusinessGoals);
                    }}
                    variant="outlined"
                  />
                ))}
              </Box>
              {formik.touched.businessGoals && formik.errors.businessGoals && (
                <FormHelperText error>
                  {formik.errors.businessGoals}
                </FormHelperText>
              )}
            </Box>
          </>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <CustomBox onSubmit={formik.handleSubmit}>
      <LinearProgress
        variant="determinate"
        value={(currentStep / (steps.length - 1)) * 100}
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
        {currentStep > 0 && <Button onClick={handleBack}>Back</Button>}
        {/* This is a spacer to ensure the Next button aligns to the right when there's no Back button */}
        {currentStep === 0 && <Box flex={1} />}
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ flex: currentStep > 0 ? 0 : 1, maxWidth: "30%" }}
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </Button>
      </Box>
    </CustomBox>
  );
};
export default RegisterForm;
