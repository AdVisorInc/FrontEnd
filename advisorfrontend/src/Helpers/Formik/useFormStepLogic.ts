// useFormStepLogic.ts
import { useEffect, useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import { FormValues, validationSchemaArray } from "../../Types/FormTypes";
import {
  createUserWithEmailAndPassword,
  AuthError,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../Firebase/config";

interface UseFormStepLogicProps {
  initialValues: FormValues;
  onSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => void | Promise<any>;
}
const useFormStepLogic = ({
  initialValues,
  onSubmit,
}: UseFormStepLogicProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [emailExists, setEmailExists] = useState(false);
  const [cachedEmails, setCachedEmails] = useState<string[]>([]);
  const [emailVerified, setEmailVerified] = useState(false);
  const [emailVerificationSent, setEmailVerificationSent] = useState(false);

  const cacheEmail = (email: string) => {
    if (!cachedEmails.includes(email)) {
      setCachedEmails((prevEmails) => [...prevEmails, email]);
    }
  };
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema: validationSchemaArray[currentStep],
    onSubmit: async (values, formikHelpers) => {
      if (currentStep === 1) {
        console.log("Step Password");
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          if (userCredential.user) {
            await sendEmailVerification(userCredential.user);
            setEmailVerificationSent(true);
            formikHelpers.setSubmitting(false);
          }
          goToNextStep();
        } catch (error) {
          const firebaseError = error as { code?: string }; // Type assertion
          console.log(firebaseError.code);
          switch (firebaseError.code) {
            case "auth/email-already-in-use":
              console.log("Email already in use");
              formikHelpers.setFieldError(
                "email",
                "Email already in use. Please sign in or use a different email."
              );
              formikHelpers.setFieldValue("password", "", false); // Clear password field
              formikHelpers.setFieldValue("confirmPassword", "", false); // Clear confirmPassword field
              cacheEmail(values.email);
              setEmailExists(true);
              setCurrentStep(0); // Go back to the first step
              break;
            default:
              formikHelpers.setFieldError(
                "email",
                "An unexpected error occurred. Please try again."
              );
              break;
          }
          formikHelpers.setSubmitting(false);
          return;
        }
      } else if (currentStep === validationSchemaArray.length - 1) {
        await onSubmit(values, formikHelpers);
      } else {
        goToNextStep();
      }
    },
  });
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Profile:", user);
      if (user) {
        setEmailVerified(user.emailVerified);
        if (user.emailVerified && emailVerificationSent) {
          goToNextStep();
          setEmailVerificationSent(false); // Reset to prevent looping
        }
      }
    });

    return () => unsubscribe();
  }, [emailVerificationSent]);
  const goToNextStep = async () => {
    if (currentStep === 0 && cachedEmails.includes(formik.values.email)) {
      // If trying to proceed with a cached email, block and show an error
      formik.setFieldError(
        "email",
        "This email is already in use. Please sign in or use a different email."
      );
      return; // Stop the next step transition
    }
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
      if (currentStep < validationSchemaArray.length - 2) {
        setCurrentStep(currentStep + 1);
      } else {
        onSubmit(formik.values, formik);
      }
    } else {
      formik.validateForm();
    }
  };
  const goToPreviousStep = () =>
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  const isFinalStep = () => currentStep === validationSchemaArray.length - 2;
  return {
    formik,
    currentStep,
    goToNextStep,
    goToPreviousStep,
    isFinalStep,
    handleSubmit: formik.submitForm,
    setEmailExists,
    emailExists,
    cachedEmails,
    emailVerified,
    emailVerificationSent,
    setEmailVerificationSent,
  };
};

export default useFormStepLogic;
