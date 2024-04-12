// organization-creation.tsx
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Typography,
  IconButton,
  FormControlLabel,
  Checkbox,
  MobileStepper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Grid,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails, Card, Button, Divider, Box, ListItemButton, CardContent, CircularProgress,
} from '@mui/material';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import { CircleStepConnector } from "../steppers/circles/circle-step-connector";
import { CircleStepIndicator } from "../steppers/circles/circle-step-indicator";
import AlertProgressAlternate from "../alerts/progress-alternate/alert-progress-alternate";
import AlertCompletedAlternate from "../alerts/completed-alternate/alert-completed-alternate";
import AlertFailed from "../alerts/failed/alert-failed";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ProfileCover from "../upload/profile-cover/profile-cover";
import AvatarUploadLogo from '../upload/avatar/avatar-upload-logo';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {AvatarState} from "../../base/styles/avatar";
import PriorityHighTwoToneIcon from "@mui/icons-material/PriorityHighTwoTone";
import DoneIcon from "@mui/icons-material/Done";
interface OrganizationCreationProps {
  onClose: () => void;
}

const OrganizationCreation: React.FC<OrganizationCreationProps> = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [organizationName, setOrganizationName] = useState('');
  const [organizationDescription, setOrganizationDescription] = useState('');
  const [organizationAvatar, setOrganizationAvatar] = useState<File | null>(null);
  const [skipConnectAccounts, setSkipConnectAccounts] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const steps = [
    { title: t('Organization Details'), description: 'Enter organization details.' },
    { title: t('Connect Accounts'), description: 'Connect your ad accounts (optional).' },
    { title: t('Review and Create'), description: 'Review and create the organization.' },
  ];
  const [connectingAccount, setConnectingAccount] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState({
    google: null,
    meta: null,
    x: null,
  });
  const [connectedAccounts, setConnectedAccounts] = useState({
    google: false,
    meta: false,
    x: false,
  });
  const [selectedAccounts, setSelectedAccounts] = useState({
    google: [],
    meta: [],
    x: [],
  });
  const accounts = [
    { name: 'google', label: 'Google', icon: '/placeholders/logo/google-icon.svg' },
    { name: 'meta', label: 'Meta', icon: '/placeholders/logo/meta-icon.svg' },
    { name: 'x', label: 'X', icon: '/placeholders/logo/x-icon.svg' },
  ];

  const handleAccountSelection = (platform, account) => {
    setSelectedAccounts((prevState) => {
      const isSelected = prevState[platform].includes(account);
      if (isSelected) {
        return {
          ...prevState,
          [platform]: prevState[platform].filter((acc) => acc !== account),
        };
      } else {
        return {
          ...prevState,
          [platform]: [...prevState[platform], account],
        };
      }
    });
  };

  const handleConnect = (account) => {
    setConnectingAccount(account);
    setConnectionStatus((prevState) => ({
      ...prevState,
      [account]: 'progress',
    }));

    // Simulate connection process
    setTimeout(() => {
      // Simulate success or error scenario
      const random = Math.random();
      if (random < 0.8) {
        setConnectedAccounts((prevState) => ({
          ...prevState,
          [account]: true,
        }));
        setConnectionStatus((prevState) => ({
          ...prevState,
          [account]: 'success',
        }));
      } else {
        setConnectionStatus((prevState) => ({
          ...prevState,
          [account]: 'failed',
        }));
      }
      setConnectingAccount(null);
    }, 2000);
  };
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
    setOrganizationName('');
    setOrganizationDescription('');
    setOrganizationAvatar(null);
    setSkipConnectAccounts(false);
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setOrganizationAvatar(file);
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <AvatarUploadLogo/>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t('Organization Name')}
                fullWidth
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t('Organization Description')}
                fullWidth
                multiline
                rows={3}
                value={organizationDescription}
                onChange={(e) => setOrganizationDescription(e.target.value)}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Connect your ad accounts to streamline your campaigns.</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {accounts.map((account) => (
                  <Grid item xs={12} sm={12} md={12} key={account.name}>
                    <Card>
                      <CardContent>
                        {connectedAccounts[account.name] ? (
                          <Accordion
                            sx={{
                              boxShadow: 'none',
                              '&:before': {
                                display: 'none',
                              },
                            }}
                          >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <ListItemAvatar>
                                <AvatarState state="success" isSoft>
                                  <DoneIcon fontSize="small" />
                                </AvatarState>
                              </ListItemAvatar>
                              <ListItemText
                                primary={t(account.label)}
                                secondary={t(`Your ${account.label} Ads account is connected`)}
                              />
                            </AccordionSummary>
                            <AccordionDetails>
                              <List>
                                {['Account 1', 'Account 2', 'Account 3'].map((acc) => (
                                  <ListItem
                                    key={acc}
                                    button
                                    onClick={() => handleAccountSelection(account.name, acc)}
                                    selected={selectedAccounts[account.name].includes(acc)}
                                  >
                                    <ListItemText primary={acc} />
                                  </ListItem>
                                ))}
                              </List>
                            </AccordionDetails>
                          </Accordion>
                        ) : (
                          <ListItem>
                            <ListItemAvatar>
                              {connectingAccount === account.name && connectionStatus[account.name] === 'progress' ? (
                                <AvatarState state="warning" isSoft>
                                  <CircularProgress color="inherit" />
                                </AvatarState>
                              ) : connectionStatus[account.name] === 'success' ? (
                                <AvatarState state="success" isSoft>
                                  <DoneIcon fontSize="small" />
                                </AvatarState>
                              ) : connectionStatus[account.name] === 'failed' ? (
                                <AvatarState state="error" isSoft>
                                  <PriorityHighTwoToneIcon />
                                </AvatarState>
                              ) : (
                                <Avatar
                                  src={account.icon}
                                  imgProps={{ style: { objectFit: 'contain' } }}
                                />
                              )}
                            </ListItemAvatar>
                            <ListItemText
                              primary={t(account.label)}
                              secondary={
                                connectingAccount === account.name && connectionStatus[account.name] === 'progress'
                                  ? t('Connecting...')
                                  : connectionStatus[account.name] === 'failed'
                                    ? t('Connection failed. Please try again.')
                                    : connectedAccounts[account.name]
                                      ? t(`Your ${account.label} Ads account is connected`)
                                      : t(`Connect your ${account.label} Ads account`)
                              }
                            />
                            {!connectedAccounts[account.name] && (
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleConnect(account.name)}
                                disabled={connectingAccount !== null}
                              >
                                {t('Connect')}
                              </Button>
                            )}
                          </ListItem>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                Review Organization Details
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" mb={4}>
                {organizationAvatar ? (
                  <Avatar src={URL.createObjectURL(organizationAvatar)} sx={{ width: 120, height: 120 }} />
                ) : (
                  <Avatar sx={{ width: 120, height: 120, bgcolor: 'primary.main' }}>
                    <Typography variant="h4" color="white">
                      {organizationName.charAt(0)}
                    </Typography>
                  </Avatar>
                )}
              </Box>
              <Box mb={4}>
                <Typography variant="h6" gutterBottom>
                  <strong>Name:</strong>
                </Typography>
                <Typography>{organizationName}</Typography>

                <Typography variant="h6" gutterBottom mt={2}>
                  <strong>Description:</strong>
                </Typography>
                <Typography>{organizationDescription}</Typography>
              </Box>
            </Grid>
            {!skipConnectAccounts && (
              <Grid item xs={12}>
                <Box mb={4}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Connected Accounts
                  </Typography>
                  <Grid container spacing={2}>
                    {Object.entries(connectedAccounts).map(([platform, isConnected]) =>
                      isConnected ? (
                        <Grid item xs={12} sm={6} key={platform}>
                          <Card>
                            <CardContent>
                              <Box display="flex" alignItems="center">
                                <Avatar src={accounts.find((acc) => acc.name === platform).icon} sx={{ mr: 2 }} />
                                <Typography variant="subtitle1">{platform} Ads</Typography>
                              </Box>
                              <Typography variant="body2" color="text.secondary">
                                {selectedAccounts[platform].length} account(s) connected
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ) : null
                    )}
                  </Grid>
                </Box>
              </Grid>
            )}
            <Grid item xs={12}>
              <Box mt={4}>
                <Typography>
                  By clicking <strong>Finish</strong>, your organization will be created with the provided details and
                  connected accounts. You can always modify these settings later.
                </Typography>
              </Box>
            </Grid>
          </Grid>
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
            <ButtonSoft color="secondary" disabled={activeStep === 0} onClick={handleBack}>
              {t('Back')}
            </ButtonSoft>
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
