// useFormStepLogic.ts
import { useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import { FormValues, validationSchemaArray } from "../../Types/FormTypes";

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
      if (isLastStep) {
        await onSubmit(values, formikHelpers); // Call the provided onSubmit function
      } else {
        goToNextStep(); // Move to the next step if not the last
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
