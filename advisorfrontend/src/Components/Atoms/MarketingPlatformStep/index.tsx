// MarketingPlatformsStep.tsx
import React from "react";
import { Typography, Chip, Box, FormHelperText } from "@mui/material";
import { FormikProps } from "formik";
import { FormValues, marketingOptions } from "../../../Types/FormTypes";

interface MarketingPlatformsStepProps {
  formik: FormikProps<FormValues>;
}

const MarketingPlatformsStep: React.FC<MarketingPlatformsStepProps> = ({
  formik,
}) => {
  return (
    <>
      <Typography>
        Select one or more platforms where you plan to run your marketing
        campaigns.
      </Typography>
      <Box>
        {marketingOptions.map((option) => (
          <Chip
            key={option}
            label={option}
            onClick={() => {
              const index = formik.values.marketingPlatforms.indexOf(option);
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
};

export default MarketingPlatformsStep;
