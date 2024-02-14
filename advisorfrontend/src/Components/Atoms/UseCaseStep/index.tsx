// UseCaseStep.tsx
import React from "react";
import { Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FormikProps } from "formik";
import { FormValues } from "../../../Types/FormTypes";

interface UseCaseStepProps {
  formik: FormikProps<FormValues>;
}

const UseCaseStep: React.FC<UseCaseStepProps> = ({ formik }) => {
  return (
    <>
      <Typography>
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
      >
        <ToggleButton value="personal">Personal</ToggleButton>
        <ToggleButton value="research">Research</ToggleButton>
        <ToggleButton value="business">Business</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default UseCaseStep;
