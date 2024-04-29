// connect-accounts.tsx
import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PriorityHighTwoToneIcon from '@mui/icons-material/PriorityHighTwoTone';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AvatarState } from '../../base/styles/avatar';

interface ConnectAccountsProps {
  organizationData: any;
  setOrganizationData: (data: any) => void;
}

const ConnectAccounts: React.FC<ConnectAccountsProps> = ({
  organizationData,
  setOrganizationData,
}) => {
  const { t } = useTranslation();

  const [connectingAccount, setConnectingAccount] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState({
    google: null,
    meta: null,
    x: null,
  });

  const accounts = [
    { name: 'google', label: 'Google', icon: '/placeholders/logo/google-icon.svg' },
    { name: 'meta', label: 'Meta', icon: '/placeholders/logo/meta-icon.svg' },
    { name: 'x', label: 'X', icon: '/placeholders/logo/x-icon.svg' },
  ];

  const options = { appId: '734253658867683' };
  //const { isFacebookSDKReady } = useFacebook(options);

  const handleAccountSelection = (platform, account) => {
    setOrganizationData({
      ...organizationData,
      selectedAccounts: {
        ...organizationData.selectedAccounts,
        [platform]: organizationData.selectedAccounts[platform]
          ? organizationData.selectedAccounts[platform].includes(account)
            ? organizationData.selectedAccounts[platform].filter((acc) => acc !== account)
            : [...organizationData.selectedAccounts[platform], account]
          : [account],
      },
    });
  };

  const handleConnect = (account) => {

  };

  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
      >
        <Typography>Connect your ad accounts to streamline your campaigns.</Typography>
      </Grid>
      <Grid
        item
        xs={12}
      >
        <Grid
          container
          spacing={2}
        >
          {accounts.map((account) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              key={account.name}
            >
              <Card>
                <CardContent>
                  {organizationData.connectedAccounts[account.name] ? (
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
                          <AvatarState
                            state="success"
                            isSoft
                          >
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
                              selected={organizationData.selectedAccounts[account.name]?.includes(
                                acc
                              )}
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
                        {connectingAccount === account.name &&
                        connectionStatus[account.name] === 'progress' ? (
                          <AvatarState
                            state="warning"
                            isSoft
                          >
                            <CircularProgress color="inherit" />
                          </AvatarState>
                        ) : connectionStatus[account.name] === 'success' ? (
                          <AvatarState
                            state="success"
                            isSoft
                          >
                            <DoneIcon fontSize="small" />
                          </AvatarState>
                        ) : connectionStatus[account.name] === 'failed' ? (
                          <AvatarState
                            state="error"
                            isSoft
                          >
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
                          connectingAccount === account.name &&
                          connectionStatus[account.name] === 'progress'
                            ? t('Connecting...')
                            : connectionStatus[account.name] === 'failed'
                              ? t('Connection failed. Please try again.')
                              : organizationData.connectedAccounts[account.name]
                                ? t(`Your ${account.label} Ads account is connected`)
                                : t(`Connect your ${account.label} Ads account`)
                        }
                      />
                      {!organizationData.connectedAccounts[account.name] && (
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleConnect(account.name)}
                          disabled={
                            connectingAccount !== null ||
                            account.name === 'google' ||
                            account.name === 'x'
                          }
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
};

export default ConnectAccounts;
