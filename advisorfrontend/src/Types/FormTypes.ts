// formTypes.ts
import * as Yup from "yup";

export interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  countryCode: string;
  verificationCode: string;
  useCase: "personal" | "research" | "business";
  businessGoals: string[];
  marketingPlatforms: string[];
  initialMarketingGoal?: string;
}

const emailSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const passwordSchema = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(/[@$!%*?&_]/, "Must contain at least one special character"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const useCaseSchema = Yup.object({
  useCase: Yup.string().required("Please select a use case"),
});

const marketingPlatformsSchema = Yup.object({
  marketingPlatforms: Yup.array()
    .of(Yup.string().required("Please select at least one marketing platform"))
    .min(1, "Select at least one marketing platform"),
});

const initialMarketingGoalSchema = Yup.object({
  initialMarketingGoal: Yup.string().required(
    "Please select an initial marketing goal"
  ),
});

const businessGoalsSchema = Yup.object({
  businessGoals: Yup.array()
    .of(Yup.string().required("Please select at least one business goal"))
    .min(1, "Select at least one business goal"),
});

const phoneNumberSchema = Yup.object({
  phoneNumber: Yup.string().required("Phone number is required"),
  countryCode: Yup.string().required("Country code is required"),
});

const verificationCodeSchema = Yup.object({
  verificationCode: Yup.string().required("Verification code is required"),
});

export const validationSchemaArray = [
  emailSchema,
  passwordSchema,
  useCaseSchema,
  marketingPlatformsSchema,
  initialMarketingGoalSchema,
  businessGoalsSchema,
  phoneNumberSchema,
  verificationCodeSchema,
];
export const marketingOptions = [
  "Facebook",
  "Google",
  "Instagram",
  "Twitter",
  "TikTok",
];

export const initialMarketingGoals = [
  "Increase Brand Awareness",
  "Generate Leads",
  "Boost Sales",
];

export const businessGoalsOptions = [
  "Expand Market Reach",
  "Enhance Customer Loyalty",
  "Increase Operational Efficiency",
  "Drive Innovation",
  "Strengthen Brand Recognition",
];
export const getEmailSchema = (cachedEmails: string[]) =>
  Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .notOneOf(
        cachedEmails,
        "This email is already in use. Please sign in or use a different email."
      )
      .required("Email is required"),
  });
