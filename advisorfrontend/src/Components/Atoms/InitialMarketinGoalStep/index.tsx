// InitialMarketingGoalStep.tsx
import React from "react";
import {
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { FormikProps } from "formik";
import { FormValues, initialMarketingGoals } from "../../../Types/FormTypes";

interface InitialMarketingGoalStepProps {
  formik: FormikProps<FormValues>;
}

const InitialMarketingGoalStep: React.FC<InitialMarketingGoalStepProps> = ({
  formik,
}) => {
  return (
    <>
      <Typography>Select your initial marketing goal.</Typography>
      <FormControl
        fullWidth
        error={Boolean(
          formik.touched.initialMarketingGoal &&
            formik.errors.initialMarketingGoal
        )}
      >
        <InputLabel>Initial Marketing Goal</InputLabel>
        <Select
          value={formik.values.initialMarketingGoal}
          onChange={formik.handleChange}
          name="initialMarketingGoal"
        >
          {initialMarketingGoals.map((goal) => (
            <MenuItem key={goal} value={goal}>
              {goal}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.initialMarketingGoal &&
          formik.errors.initialMarketingGoal && (
            <FormHelperText>
              {formik.errors.initialMarketingGoal}
            </FormHelperText>
          )}
      </FormControl>
    </>
  );
};

export default InitialMarketingGoalStep;
