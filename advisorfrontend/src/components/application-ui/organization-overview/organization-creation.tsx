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
import PricingAndBilling from './pricing-and-billing';
import { createSubscription } from 'src/slices/stripe';
import {useDispatch, useSelector} from "../../../store";
import {
  checkOrganizationNameAvailability,
  createOrganization,
  selectCreateOrganizationLoading,
  selectCreateOrganizationSuccess,
  selectCreateOrganizationError,
} from 'src/slices/organization';
interface OrganizationCreationProps {
  onClose: () => void;
}


const OrganizationCreation: React.FC<OrganizationCreationProps> = ({ onClose }) => {
  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
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
    pricingPlan: null,
    billingSettings: null,
  });
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();
  const createOrganizationLoading = useSelector(selectCreateOrganizationLoading);
  const createOrganizationSuccess = useSelector(selectCreateOrganizationSuccess);
  const createOrganizationError = useSelector(selectCreateOrganizationError);
  const steps = [
    { title: t('Organization Details'), description: 'Enter organization details.' },
    { title: t('Connect Accounts'), description: 'Connect your ad accounts (optional).' },
    { title: t('Pricing and Billing'), description: 'Select a pricing plan and set up billing.' },
    { title: t('Review and Create'), description: 'Review and create the organization.' },
  ];
  const [validationErrors, setValidationErrors] = useState({
    organizationDetails: {
      name: false,
      description: false,
    },
    pricingAndBilling: {
      pricingPlan: false,
      billingSettings: false,
    },
  });
  const handleOrganizationDataChange = (newData: any) => {
    setOrganizationData({
      ...organizationData,
      ...newData,
      avatar: newData.avatar || organizationData.avatar,
    });
    validateOrganizationDetails(newData);
    validatePricingAndBilling(newData);
  };

  const validateOrganizationDetails = (data: any) => {
    const { name, description } = data;
    const errors = {
      name: name.trim() === '',
      description: description.trim() === '',
    };
    setValidationErrors((prevState) => ({
      ...prevState,
      organizationDetails: errors,
    }));
  };

  const validatePricingAndBilling = (data: any) => {
    const { pricingPlan, billingSettings } = data;
    const errors = {
      pricingPlan: !pricingPlan,
      billingSettings: pricingPlan && pricingPlan.name !== 'Free Plan' && !billingSettings?.selectedCard,
    };
    setValidationErrors((prevState) => ({
      ...prevState,
      pricingAndBilling: errors,
    }));
  };
  const handleNext = async () => {
    if (activeStep === 0) {
      validateOrganizationDetails(organizationData);
      if (!validationErrors.organizationDetails.name && !validationErrors.organizationDetails.description && organizationData.name.trim() !== '') {
        const isNameAvailable = await checkOrganizationNameAvailability(organizationData.name);
        if (isNameAvailable) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          setValidationErrors((prevState) => ({
            ...prevState,
            organizationDetails: {
              ...prevState.organizationDetails,
              name: true,
            },
          }));
        }
      }
    } else if (activeStep === 2) {
      validatePricingAndBilling(organizationData);
      if (!validationErrors.pricingAndBilling.pricingPlan && !validationErrors.pricingAndBilling.billingSettings) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else if (activeStep === steps.length - 1) {
      console.log('Dispatching createOrganization action');
      dispatch(createOrganization(organizationData));
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
      pricingPlan: null,
      billingSettings: null,
    });
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <OrganizationDetails
            organizationData={organizationData}
            setOrganizationData={handleOrganizationDataChange}
            validationErrors={validationErrors.organizationDetails}
            selectedLogo={selectedLogo}
            setSelectedLogo={setSelectedLogo}
            loading={loading}
            setLoading={setLoading}
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
          <PricingAndBilling
            organizationData={organizationData}
            setOrganizationData={handleOrganizationDataChange}
            validationErrors={validationErrors.pricingAndBilling}
          />
        );
      case 3:
        console.log(organizationData)
        return <ReviewOrganization organizationData={organizationData} />;
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
      {createOrganizationLoading ? (
        <Box py={5}>
          <AlertProgressAlternate />
        </Box>
      ) : createOrganizationSuccess ? (
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
      ) : createOrganizationError ? (
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
              disabled={
                loading ||
                (activeStep === 0 && (validationErrors.organizationDetails.name || validationErrors.organizationDetails.description)) ||
                (activeStep === 2 && (validationErrors.pricingAndBilling.pricingPlan || validationErrors.pricingAndBilling.billingSettings))
              }
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
