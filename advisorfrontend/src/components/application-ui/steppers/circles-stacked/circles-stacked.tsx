import {
  alpha,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
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
import { CircleStepConnector } from './circle-step-connector';
import { CircleStepContent } from './circle-step-content';
import { CircleStepIndicator } from './circle-step-indicator';

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
      {activeStep === steps.length ? (
        <>
          <Card>
            <CardContent>
              <AlertCompleted />
            </CardContent>
            <Divider />
            <CardActions
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[25], 0.02)
                    : 'neutral.25',
                justifyContent: 'center',
              }}
            >
              <Button
                variant="contained"
                color="error"
                onClick={handleReset}
              >
                Reset
              </Button>
            </CardActions>
          </Card>
        </>
      ) : isMobile ? (
        <>
          <MobileStepper
            variant="dots"
            steps={steps.length}
            position="top"
            activeStep={activeStep}
            nextButton={<></>}
            backButton={<></>}
          />
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
        </>
      ) : (
        <>
          <Stepper
            orientation="vertical"
            connector={<CircleStepConnector />}
            activeStep={activeStep}
          >
            {steps.map((step) => (
              <Step
                sx={{
                  mt: '-14px',
                }}
                key={step.title}
              >
                <StepLabel
                  sx={{
                    py: 0,
                    '.MuiStepLabel-label': { fontWeight: 600, mt: '0 !important', pt: 2 },
                  }}
                  StepIconComponent={CircleStepIndicator}
                  optional={step.description}
                >
                  {step.title}
                </StepLabel>
                <CircleStepContent>
                  <Card>
                    <CardContent>
                      <Typography>{step.description}</Typography>
                    </CardContent>
                    <Divider />
                    <CardActions
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? alpha(theme.palette.neutral[25], 0.02)
                            : 'neutral.25',
                      }}
                    >
                      <Stack
                        spacing={1}
                        direction="row"
                      >
                        <ButtonSoft
                          color="secondary"
                          size="small"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                        >
                          Back
                        </ButtonSoft>
                        <Button
                          size="small"
                          onClick={handleNext}
                          variant={activeStep === steps.length - 1 ? 'contained' : 'outlined'}
                          color="primary"
                        >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </Stack>
                    </CardActions>
                  </Card>
                </CircleStepContent>
              </Step>
            ))}
          </Stepper>
        </>
      )}
    </>
  );
};

export default Component;
