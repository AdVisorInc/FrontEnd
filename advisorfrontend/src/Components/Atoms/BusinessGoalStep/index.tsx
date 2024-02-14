// BusinessGoalsStep.tsx
import React from "react";
import { Typography, Chip, Box, FormHelperText } from "@mui/material";
import { FormikProps } from "formik";
import { FormValues, businessGoalsOptions } from "../../../Types/FormTypes";

interface BusinessGoalsStepProps {
  formik: FormikProps<FormValues>;
}

const BusinessGoalsStep: React.FC<BusinessGoalsStepProps> = ({ formik }) => {
  return (
    <>
      <Typography>Select your business goals.</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {businessGoalsOptions.map((goal) => (
          <Chip
            key={goal}
            label={goal}
            onClick={() => {
              const index = formik.values.businessGoals.indexOf(goal);
              const newGoals = [...formik.values.businessGoals];
              if (index === -1) {
                newGoals.push(goal);
              } else {
                newGoals.splice(index, 1);
              }
              formik.setFieldValue("businessGoals", newGoals);
            }}
            color={
              formik.values.businessGoals.includes(goal) ? "primary" : "default"
            }
            variant="outlined"
          />
        ))}
      </Box>
      {formik.touched.businessGoals && formik.errors.businessGoals && (
        <FormHelperText error>{formik.errors.businessGoals}</FormHelperText>
      )}
    </>
  );
};

export default BusinessGoalsStep;
