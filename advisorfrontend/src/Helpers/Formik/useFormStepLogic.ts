// useFormStepLogic.ts
import { useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import { FormValues, validationSchemaArray } from "../../Types/FormTypes";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
  const isLastStep = currentStep === validationSchemaArray.length - 1;

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema: validationSchemaArray[currentStep],
    onSubmit: async (values, formikHelpers) => {
      if (currentStep === 6) {
        // Assuming the last step is where the user submits the form
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          console.log("Account created successfully", userCredential.user);
          onSubmit(values, formikHelpers); // Proceed with your custom submission logic
        } catch (error: any) {
          if (error.code === "auth/email-already-in-use") {
            formikHelpers.setFieldError(
              "email",
              "Email already in use. Please sign in."
            );
          } else {
            console.error("Registration error: ", error);
          }
        }
      } else {
        setCurrentStep(currentStep + 1); // Proceed to the next step
      }
    },
  });

  const goToNextStep = async () => {
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
      if (currentStep < validationSchemaArray.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        formik.handleSubmit();
      }
    } else {
      formik.validateForm();
    }
  };
  const goToPreviousStep = () =>
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  const isFinalStep = () => currentStep === validationSchemaArray.length - 1;

  // Directly use formik's submitForm as handleSubmit to trigger form submission
  const handleSubmit = () => formik.submitForm();

  return {
    formik,
    currentStep,
    goToNextStep,
    goToPreviousStep,
    isFinalStep,
    handleSubmit,
  };
};

export default useFormStepLogic;
