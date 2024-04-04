import {
  Box,
  Button,
  Divider,
  MobileStepper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AlertCompleted from 'src/components/application-ui/alerts/completed/alert-completed';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import { BulletStepConnector } from './bullet-step-connector';
import { BulletStepIndicator } from './bullet-step-indicator';

const Component = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const steps = [
    { title: t('Account Creation'), description: 'Create your personal account.' },
    { title: t('Profile Setup'), description: 'Set up your user profile.' },
    { title: t('Preference Settings'), description: 'Adjust your preferred settings.' },
    { title: t('Tour'), description: 'Take a tour of our platform.' },
    { title: t('Start Exploring'), description: 'Begin your journey.' },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      {isMobile ? (
        <MobileStepper
          variant="dots"
          steps={steps.length}
          position="top"
          activeStep={activeStep}
          nextButton={<></>}
          backButton={<></>}
        />
      ) : (
        <Stepper
          alternativeLabel
          connector={<BulletStepConnector />}
          activeStep={activeStep}
        >
          {steps.map((step) => (
            <Step key={step.title}>
              <StepLabel StepIconComponent={BulletStepIndicator}>{step.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
      )}
      {activeStep === steps.length ? (
        <React.Fragment>
          <Box py={5}>
            <AlertCompleted />
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleReset}
            >
              Reset
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography
            variant="h3"
            color="neutral.700"
            textAlign="center"
            sx={{
              py: 6,
            }}
          >
            {steps[activeStep].description}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack
            justifyContent="space-between"
            direction="row"
          >
            <ButtonSoft
              color="secondary"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </ButtonSoft>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button
              onClick={handleNext}
              variant={activeStep === steps.length - 1 ? 'contained' : 'outlined'}
              color="primary"
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Stack>
        </React.Fragment>
      )}
    </>
  );
};

export default Component;
