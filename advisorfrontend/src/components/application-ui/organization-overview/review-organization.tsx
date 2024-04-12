// review-organization.tsx
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Box, Avatar, Card, CardContent } from '@mui/material';

interface ReviewOrganizationProps {
  organizationData: any;
}

const ReviewOrganization: React.FC<ReviewOrganizationProps> = ({ organizationData }) => {
  const { t } = useTranslation();

  const accounts = [
    { name: 'google', label: 'Google', icon: '/placeholders/logo/google-icon.svg' },
    { name: 'meta', label: 'Meta', icon: '/placeholders/logo/meta-icon.svg' },
    { name: 'x', label: 'X', icon: '/placeholders/logo/x-icon.svg' },
  ];

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Review Organization Details
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center" mb={4}>
          {organizationData.avatar ? (
            <Avatar src={URL.createObjectURL(organizationData.avatar)} sx={{ width: 120, height: 120 }} />
          ) : (
            <Avatar sx={{ width: 120, height: 120, bgcolor: 'primary.main' }}>
              <Typography variant="h4" color="white">
                {organizationData.name.charAt(0)}
              </Typography>
            </Avatar>
          )}
        </Box>
        <Box mb={4}>
          <Typography variant="h6" gutterBottom>
            <strong>Name:</strong>
          </Typography>
          <Typography>{organizationData.name}</Typography>

          <Typography variant="h6" gutterBottom mt={2}>
            <strong>Description:</strong>
          </Typography>
          <Typography>{organizationData.description}</Typography>
        </Box>
      </Grid>
      {!organizationData.skipConnectAccounts && (
        <Grid item xs={12}>
          <Box mb={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Connected Accounts
            </Typography>
            <Grid container spacing={2}>
              {Object.entries(organizationData.connectedAccounts).map(([platform, isConnected]) =>
                isConnected ? (
                  <Grid item xs={12} sm={6} key={platform}>
                    <Card>
                      <CardContent>
                        <Box display="flex" alignItems="center">
                          <Avatar src={accounts.find((acc) => acc.name === platform).icon} sx={{ mr: 2 }} />
                          <Typography variant="subtitle1">{platform} Ads</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {organizationData.selectedAccounts[platform].length} account(s) connected
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
};

export default ReviewOrganization;
