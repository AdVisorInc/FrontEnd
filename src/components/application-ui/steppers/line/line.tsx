import CheckIcon from '@mui/icons-material/Check';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  MobileStepper,
  Stack,
  Step,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AlertCompleted from 'src/components/application-ui/alerts/completed/alert-completed';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';
import { StepButtonLine } from './line-step-button';
import { LineStepConnector } from './line-step-connector';

const Component = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const steps = [
    { title: t('Account Creation'), description: 'Create your personal account.' },
    { title: t('Profile Setup'), description: 'Set up your user profile.' },
    { title: t('Preference Settings'), description: 'Adjust your preferred settings.' },
    { title: t('Start Exploring'), description: 'Begin your journey.' },
  ];

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Card>
      <CardContent>
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
          <>
            <Stepper
              sx={{
                height: 40,
              }}
              nonLinear
              connector={<LineStepConnector />}
              activeStep={activeStep}
            >
              {steps.map((step, index) => (
                <Step
                  key={step.title}
                  completed={completed[index]}
                >
                  <StepButtonLine onClick={handleStep(index)}>{step.title}</StepButtonLine>
                </Step>
              ))}
            </Stepper>
            <Divider sx={{ my: 2 }} />
          </>
        )}
        {allStepsCompleted() ? (
          <React.Fragment>
            <Box
              pb={5}
              pt={3}
            >
              <AlertCompleted />
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>{steps[activeStep].description}</Typography>

            <Stack
              pt={2}
              direction="row"
              justifyContent="space-between"
            >
              <ButtonSoft
                color="secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </ButtonSoft>
              <Stack
                direction="row"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                  />
                }
                spacing={2}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleNext}
                >
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <InlineBadge>
                      <PulseBadge
                        badgeContent=" "
                        color="error"
                        variant="dot"
                        sx={{
                          mr: isMobile ? 0 : 1,
                        }}
                      />
                      {!isMobile && (
                        <Typography
                          variant="body1"
                          color="error.main"
                        >
                          Step {activeStep + 1} already completed!
                        </Typography>
                      )}
                    </InlineBadge>
                  ) : (
                    <ButtonSoft
                      onClick={handleComplete}
                      variant="contained"
                      color={completedSteps() === totalSteps() - 1 ? 'primary' : 'success'}
                    >
                      {completedSteps() === totalSteps() - 1 ? (
                        'Finish'
                      ) : isMobile ? (
                        <CheckIcon />
                      ) : (
                        'Complete Step'
                      )}
                    </ButtonSoft>
                  ))}
              </Stack>
            </Stack>
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  );
};

export default Component;
