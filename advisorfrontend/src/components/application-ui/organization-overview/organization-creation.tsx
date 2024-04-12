// organization-creation.tsx
import {Fragment, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  MobileStepper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  useMediaQuery,
  useTheme,
  Button, Divider, Box
} from '@mui/material';
import { CircleStepConnector } from "../steppers/circles/circle-step-connector";
import { CircleStepIndicator } from "../steppers/circles/circle-step-indicator";
import AlertProgressAlternate from "../alerts/progress-alternate/alert-progress-alternate";
import AlertCompletedAlternate from "../alerts/completed-alternate/alert-completed-alternate";
import AlertFailed from "../alerts/failed/alert-failed";
import OrganizationDetails from './organization-details';
import ReviewOrganization from './review-organization';
import ConnectAccounts from "./connect-accounts";
import {ButtonSoft} from "../../base/styles/button-soft";

interface OrganizationCreationProps {
  onClose: () => void;
}

const OrganizationCreation: React.FC<OrganizationCreationProps> = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [organizationData, setOrganizationData] = useState({
    name: '',
    description: '',
    avatar: null,
    skipConnectAccounts: false,
    connectedAccounts: {},
    selectedAccounts: {},
  });
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const steps = [
    { title: t('Organization Details'), description: 'Enter organization details.' },
    { title: t('Connect Accounts'), description: 'Connect your ad accounts (optional).' },
    { title: t('Review and Create'), description: 'Review and create the organization.' },
  ];

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setIsLoading(true);
      // Simulate organization creation process
      setTimeout(() => {
        setIsLoading(false);
        // Simulate success or error scenario
        const random = Math.random();
        if (random < 0.8) {
          setIsSuccess(true);
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          setIsError(true);
        }
      }, 2000);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsLoading(false);
    setIsSuccess(false);
    setIsError(false);
    setOrganizationData({
      name: '',
      description: '',
      avatar: null,
      skipConnectAccounts: false,
      connectedAccounts: {},
      selectedAccounts: {},
    });
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <OrganizationDetails
            organizationData={organizationData}
            setOrganizationData={setOrganizationData}
          />
        );
      case 1:
        return (
          <ConnectAccounts
            organizationData={organizationData}
            setOrganizationData={setOrganizationData}
          />
        );
      case 2:
        return (
          <ReviewOrganization
            organizationData={organizationData}
          />
        );
      default:
        return null;
    }
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
          connector={<CircleStepConnector />}
          activeStep={activeStep}
        >
          {steps.map((step) => (
            <Step key={step.title}>
              <StepLabel StepIconComponent={CircleStepIndicator}>{step.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
      )}
      {isLoading ? (
        <Box py={5}>
          <AlertProgressAlternate />
        </Box>
      ) : isSuccess ? (
        <Box py={5}>
          <AlertCompletedAlternate />
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleReset();
                onClose();
              }}
            >
              {t('Close')}
            </Button>
          </Box>
        </Box>
      ) : isError ? (
        <Box py={5}>
          <AlertFailed />
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                handleReset();
                onClose();
              }}
            >
              {t('Close')}
            </Button>
          </Box>
        </Box>
      ) : activeStep === steps.length ? (
        <Box py={5}>
          <AlertCompletedAlternate />
          <Divider sx={{my: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleReset();
                onClose();
              }}
            >
              {t('Close')}
            </Button>
          </Box>
        </Box>
      ) : (
        <Fragment>
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
          {renderStepContent(activeStep)}
          <Stack justifyContent="space-between" direction="row" mt={2}>
            {activeStep === 0 ? (undefined) :
              (<ButtonSoft color="secondary"  onClick={handleBack}>
                {t('Back')}
              </ButtonSoft>)
            }
            <Box sx={{ flex: '1 1 auto' }} />
            <Button
              onClick={handleNext}
              variant={activeStep === steps.length - 1 ? 'contained' : 'outlined'}
              color="primary"
            >
              {activeStep === steps.length - 1 ? t('Finish') : t('Next')}
            </Button>
          </Stack>
        </Fragment>
      )}
    </>
  );
};

export default OrganizationCreation;
