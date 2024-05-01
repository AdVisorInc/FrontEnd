// review-organization.tsx
import { useTranslation } from 'react-i18next';
import {
  Grid,
  Typography,
  Box,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { StarOutline, FlightTakeoff, Work } from '@mui/icons-material';

interface ReviewOrganizationProps {
  organizationData: any;
}

const ReviewOrganization: React.FC<ReviewOrganizationProps> = ({ organizationData }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const accounts = [
    { name: 'google', label: 'Google', icon: '/placeholders/logo/google-icon.svg' },
    { name: 'meta', label: 'Meta', icon: '/placeholders/logo/meta-icon.svg' },
    { name: 'x', label: 'X', icon: '/placeholders/logo/x-icon.svg' },
  ];
  const getPlanIcon = (planName: string) => {
    console.log(planName)
    switch (planName) {
      case 'Free Plan':
        return <StarOutline sx={{ fontSize: 48, color: theme.palette.warning.main }} />;
      case 'Starter Plan':
        return <FlightTakeoff sx={{ fontSize: 48, color: theme.palette.info.main }} />;
      case 'Professional Plan':
        return <Work sx={{ fontSize: 48, color: theme.palette.success.main }} />;
      default:
        return null;
    }
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Review Organization Details
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            avatar={
              organizationData.avatar ? (
                <Avatar src={URL.createObjectURL(organizationData.avatar)} sx={{ width: 64, height: 64 }} />
              ) : (
                <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main' }}>
                  <Typography variant="h4" color="white">
                    {organizationData.name.charAt(0)}
                  </Typography>
                </Avatar>
              )
            }
            title={
              <Typography variant="h5" component="div">
                {organizationData.name}
              </Typography>
            }
            subheader={
              <Typography variant="subtitle1" color="text.secondary">
                {organizationData.description}
              </Typography>
            }
          />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              {!organizationData.skipConnectAccounts && (
                <Grid item xs={12}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Connected Accounts
                  </Typography>
                  <Grid container spacing={2}>
                    {Object.entries(organizationData.connectedAccounts).map(([platform, isConnected]) =>
                      isConnected ? (
                        <Grid item xs={12} sm={6} md={4} key={platform}>
                          <Card>
                            <CardContent>
                              <Box display="flex" alignItems="center">
                                <Avatar src={accounts.find((acc) => acc.name === platform)?.icon} sx={{ mr: 2 }} />
                                <Typography variant="subtitle1">{platform} Ads</Typography>
                              </Box>
                              {organizationData.selectedAccounts && organizationData.selectedAccounts[platform]?.length > 0 ? (
                                <Typography variant="body2" color="text.secondary">
                                  {organizationData.selectedAccounts[platform].length} account(s) connected
                                </Typography>
                              ) : (
                                <Typography variant="body2" color="text.secondary">
                                  No accounts selected
                                </Typography>
                              )}
                            </CardContent>
                          </Card>
                        </Grid>
                      ) : null
                    )}
                  </Grid>
                </Grid>
              )}
              <Grid item xs={12}>
                <Typography variant="h6" color="primary" gutterBottom>
                  Pricing Plan
                </Typography>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center">
                      {organizationData.pricingPlan ? (
                        <>
                          <Box mr={2}>{getPlanIcon(organizationData.pricingPlan.name)}</Box>
                          <Typography variant="h6">{organizationData.pricingPlan.name}</Typography>
                        </>
                      ) : (
                        <Typography>No pricing plan selected.</Typography>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" color="primary" gutterBottom>
                  Billing Settings
                </Typography>
                <Card>
                  <CardContent>
                    {organizationData.billingSettings?.selectedCard ? (
                      <>
                        <Typography variant="subtitle1">
                          Selected Card: <strong>{organizationData.billingSettings.selectedCard.card.brand}</strong>
                        </Typography>
                        <Typography variant="body2">
                          Card Number: <strong>•••• {organizationData.billingSettings.selectedCard.card.last4}</strong>
                        </Typography>
                        <Typography variant="body2">
                          Expiration Date:{' '}
                          <strong>
                            {organizationData.billingSettings.selectedCard.card.exp_month}/
                            {organizationData.billingSettings.selectedCard.card.exp_year}
                          </strong>
                        </Typography>
                        <Box mt={2}>
                          <Typography variant="subtitle1">Billing Details:</Typography>
                          <Typography variant="body2">
                            Name: <strong>{organizationData.billingSettings.selectedCard.billing_details.name}</strong>
                          </Typography>
                          <Typography variant="body2">
                            Email:{' '}
                            <strong>{organizationData.billingSettings.selectedCard.billing_details.email}</strong>
                          </Typography>
                          <Typography variant="body2">
                            Phone:{' '}
                            <strong>{organizationData.billingSettings.selectedCard.billing_details.phone}</strong>
                          </Typography>
                          <Typography variant="body2">Address:</Typography>
                          <Typography variant="body2">
                            {organizationData.billingSettings.selectedCard.billing_details.address.line1},{' '}
                            {organizationData.billingSettings.selectedCard.billing_details.address.city},{' '}
                            {organizationData.billingSettings.selectedCard.billing_details.address.state}{' '}
                            {organizationData.billingSettings.selectedCard.billing_details.address.postal_code},{' '}
                            {organizationData.billingSettings.selectedCard.billing_details.address.country}
                          </Typography>
                        </Box>
                      </>
                    ) : (
                      <Typography>No card selected.</Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ReviewOrganization;
