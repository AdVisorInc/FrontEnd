import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import LinkIcon from '@mui/icons-material/Link';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SecurityIcon from '@mui/icons-material/Security';
const mockOrganization = {
  name: 'Acme Inc.',
  description: 'A leading marketing technology company.',
  website: 'https://www.acme.com',
  contactInfo: 'info@acme.com',
  socialMedia: '@acmeinc',
  logo: 'https://example.com/logo.png',
  billingPlan: 'Growth',
  paymentMethod: 'Credit Card',
  cardHolder: 'John Doe',
  cardNumber: '**** **** **** 1234',
  expiryDate: '12/2024',
  cvc: '123',
  adAccounts: [
    { id: 'ad_account_123', name: 'Acme Meta Ads', platform: 'Facebook', status: 'Active', campaigns: 5 },
    { id: 'ad_account_456', name: 'Acme Google Ads', platform: 'Google', status: 'Inactive', campaigns: 0 },
  ],
  brandName: 'Acme',
  brandTagline: 'Marketing powered by AI',
  primaryColor: '#007bff',
  accentColor: '#6c757d',
  domain: 'app.acme.com',
  whiteLabelingEnabled: true,
  brandingRemoved: false,
  notifications: {
    campaignUpdates: true,
    accountAlerts: false,
    billingUpdates: true,
    productAnnouncements: false,
  },
  apiKey: 'api_key_123',
  webhookUrl: 'https://api.acme.com/webhooks',
  webhooksEnabled: false,
  twoFactorAuthEnabled: false,
  sessionTimeout: 30,
  automaticSessionExpiry: true,
  accountActivityMonitoring: true,
};
const SettingsTab = () => {
  const [organization, setOrganization] = useState(mockOrganization);
  const [editingSection, setEditingSection] = useState('');
  const [notificationsChanged, setNotificationsChanged] = useState(false);
  const [apiWebhooksChanged, setApiWebhooksChanged] = useState(false);
  const [securityChanged, setSecurityChanged] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (field, value) => {
    setOrganization((prevOrganization) => ({
      ...prevOrganization,
      [field]: value,
    }));
  };

  const handleEdit = (section) => {
    setEditingSection(section);
  };

  const handleSave = (section) => {
    console.log(`Saving ${section} details:`, organization);
    setEditingSection('');
    setNotificationsChanged(false);
    setApiWebhooksChanged(false);
    setSecurityChanged(false);
  };

  const handleCancel = () => {
    setOrganization(mockOrganization);
    setEditingSection('');
    setNotificationsChanged(false);
    setApiWebhooksChanged(false);
    setSecurityChanged(false);
  };

  const disconnectAdAccount = (accountId) => {
    console.log(`Disconnecting ad account: ${accountId}`);
    setOrganization((prevOrganization) => ({
      ...prevOrganization,
      adAccounts: prevOrganization.adAccounts.filter((account) => account.id !== accountId),
    }));
  };

  return (
    <Grid container spacing={3}>
      {/* Organization Profile */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} alignItems="center" mb={2}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Organization Profile
              </Typography>
              {editingSection !== 'profile' && (
                <Button variant="outlined" startIcon={<EditIcon />} onClick={() => handleEdit('profile')}>
                  Edit
                </Button>
              )}
            </Box>
            <Divider />
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} sm={3}>
                <Typography>Name:</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                {editingSection === 'profile' ? (
                  <TextField
                    fullWidth
                    value={organization.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                ) : (
                  <Typography>{organization.name}</Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography>Description:</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                {editingSection === 'profile' ? (
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    value={organization.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                  />
                ) : (
                  <Typography>{organization.description}</Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography>Website:</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                {editingSection === 'profile' ? (
                  <TextField
                    fullWidth
                    value={organization.website}
                    onChange={(e) => handleChange('website', e.target.value)}
                  />
                ) : (
                  <Typography>{organization.website}</Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography>Contact Email:</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                {editingSection === 'profile' ? (
                  <TextField
                    fullWidth
                    value={organization.contactInfo}
                    onChange={(e) => handleChange('contactInfo', e.target.value)}
                  />
                ) : (
                  <Typography>{organization.contactInfo}</Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography>Social Profile:</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                {editingSection === 'profile' ? (
                  <TextField
                    fullWidth
                    value={organization.socialMedia}
                    onChange={(e) => handleChange('socialMedia', e.target.value)}
                  />
                ) : (
                  <Typography>{organization.socialMedia}</Typography>
                )}
              </Grid>
              {editingSection === 'profile' && (
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button
                      variant="outlined"
                      startIcon={<CancelIcon />}
                      onClick={handleCancel}
                      sx={{ mr: 1 }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<SaveIcon />}
                      onClick={() => handleSave('profile')}
                    >
                      Save
                    </Button>
                  </Box>
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Billing and Subscription */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} alignItems="center" mb={2}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Billing and Subscription
              </Typography>
              {editingSection !== 'billing' && (
                <Button variant="outlined" startIcon={<EditIcon />} onClick={() => handleEdit('billing')}>
                  Edit
                </Button>
              )}
            </Box>
            <Divider />
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Plan</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Ad Accounts</TableCell>
                        <TableCell>Team Members</TableCell>
                        <TableCell>Renewal</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          {editingSection === 'billing' ? (
                            <Select
                              fullWidth
                              value={organization.billingPlan}
                              onChange={(e) => handleChange('billingPlan', e.target.value)}
                            >
                              <MenuItem value="Starter">Starter</MenuItem>
                              <MenuItem value="Growth">Growth</MenuItem>
                              <MenuItem value="Enterprise">Enterprise</MenuItem>
                            </Select>
                          ) : (
                            organization.billingPlan
                          )}
                        </TableCell>
                        <TableCell>$299/month</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>2023-12-31</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={12}>
                {editingSection === 'billing' && (
                  <>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Auto-renew subscription"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Receive billing notifications"
                    />
                  </>
                )}
              </Grid>
              <Grid item xs={12}>
                {editingSection === 'billing' ? (
                  <Select
                    fullWidth
                    value={organization.paymentMethod}
                    onChange={(e) => handleChange('paymentMethod', e.target.value)}
                  >
                    <MenuItem value="Credit Card">Credit Card</MenuItem>
                    <MenuItem value="PayPal">PayPal</MenuItem>
                    <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                  </Select>
                ) : (
                  <Typography>{organization.paymentMethod}</Typography>
                )}
              </Grid>
              {editingSection === 'billing' && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Cardholder Name"
                      value={organization.cardHolder}
                      onChange={(e) => handleChange('cardHolder', e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Card Number"
                      value={organization.cardNumber}
                      onChange={(e) => handleChange('cardNumber', e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Expiry Date"
                      value={organization.expiryDate}
                      onChange={(e) => handleChange('expiryDate', e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="CVC"
                      value={organization.cvc}
                      onChange={(e) => handleChange('cvc', e.target.value)}
                    />
                  </Grid>
                </>
              )}
              {editingSection === 'billing' && (
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button
                      variant="outlined"
                      startIcon={<CancelIcon />}
                      onClick={handleCancel}
                      sx={{ mr: 1 }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<SaveIcon />}
                      onClick={() => handleSave('billing')}
                    >
                      Save
                    </Button>
                  </Box>
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Connected Ad Accounts */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} alignItems="center" mb={2}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Connected Ad Accounts
              </Typography>
              <Button variant="outlined" startIcon={<LinkIcon />}>
                Connect New Account
              </Button>
            </Box>
            <Divider />
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Account ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Platform</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Campaigns</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {organization.adAccounts.map((account) => (
                        <TableRow key={account.id}>
                          <TableCell>{account.id}</TableCell>
                          <TableCell>{account.name}</TableCell>
                          <TableCell>{account.platform}</TableCell>
                          <TableCell>{account.status}</TableCell>
                          <TableCell>{account.campaigns}</TableCell>
                          <TableCell>
                            <Button
                              variant="outlined"
                              color="error"
                              size="small"
                              onClick={() => disconnectAdAccount(account.id)}
                            >
                              Disconnect
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Branding and White-Labeling */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} alignItems="center" mb={2}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Branding and White-Labeling
              </Typography>
              {editingSection !== 'branding' && (
                <Button variant="outlined" startIcon={<EditIcon />} onClick={() => handleEdit('branding')}>
                  Edit
                </Button>
              )}
            </Box>
            <Divider />
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} sm={3}>
                <Typography>Brand Name:</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                {editingSection === 'branding' ? (
                  <TextField
                    fullWidth
                    value={organization.brandName}
                    onChange={(e) => handleChange('brandName', e.target.value)}
                  />
                ) : (
                  <Typography>{organization.brandName}</Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography>Brand Tagline:</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                {editingSection === 'branding' ? (
                  <TextField
                    fullWidth
                    value={organization.brandTagline}
                    onChange={(e) => handleChange('brandTagline', e.target.value)}
                  />
                ) : (
                  <Typography>{organization.brandTagline}</Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography>Primary Color:</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                {editingSection === 'branding' ? (
                  <Select
                    fullWidth
                    value={organization.primaryColor}
                    onChange={(e) => handleChange('primaryColor', e.target.value)}
                  >
                    <MenuItem value="#007bff">Blue</MenuItem>
                    <MenuItem value="#28a745">Green</MenuItem>
                    <MenuItem value="#dc3545">Red</MenuItem>
                    <MenuItem value="#6c757d">Gray</MenuItem>
                  </Select>
                ) : (
                  <Typography>{organization.primaryColor}</Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography>Accent Color:</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                {editingSection === 'branding' ? (
                  <Select
                    fullWidth
                    value={organization.accentColor}
                    onChange={(e) => handleChange('accentColor', e.target.value)}
                  >
                    <MenuItem value="#007bff">Blue</MenuItem>
                    <MenuItem value="#28a745">Green</MenuItem>
                    <MenuItem value="#dc3545">Red</MenuItem>
                    <MenuItem value="#6c757d">Gray</MenuItem>
                  </Select>
                ) : (
                  <Typography>{organization.accentColor}</Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography>Domain:</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                {editingSection === 'branding' ? (
                  <TextField
                    fullWidth
                    value={organization.domain}
                    onChange={(e) => handleChange('domain', e.target.value)}
                  />
                ) : (
                  <Typography>{organization.domain}</Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={organization.whiteLabelingEnabled}
                      onChange={(e) => handleChange('whiteLabelingEnabled', e.target.checked)}
                    />
                  }
                  label="Enable White-Labeling"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={organization.brandingRemoved}
                      onChange={(e) => handleChange('brandingRemoved', e.target.checked)}
                    />
                  }
                  label="Remove Platform Branding"
                />
              </Grid>
              {editingSection === 'branding' && (
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button
                      variant="outlined"
                      startIcon={<CancelIcon />}
                      onClick={handleCancel}
                      sx={{ mr: 1 }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<SaveIcon />}
                      onClick={() => handleSave('branding')}
                    >
                      Save
                    </Button>
                  </Box>
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      {/* Notification Settings */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <NotificationsIcon sx={{ mr: 1 }} />
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Notification Settings
              </Typography>
              {notificationsChanged && (
                <Box ml={2}>
                  <Button
                    variant="outlined"
                    startIcon={<CancelIcon />}
                    onClick={() => {
                      setOrganization(mockOrganization);
                      setNotificationsChanged(false);
                    }}
                    sx={{ mr: 1 }}
                  >
                    Discard
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    onClick={() => handleSave('notifications')}
                  >
                    Save
                  </Button>
                </Box>
              )}
            </Box>
            <Divider />
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={organization.notifications.campaignUpdates}
                      onChange={(e) => {
                        handleChange('notifications', {
                          ...organization.notifications,
                          campaignUpdates: e.target.checked,
                        });
                        setNotificationsChanged(true);
                      }}
                    />
                  }
                  label="Campaign Performance Updates"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={organization.notifications.accountAlerts}
                      onChange={(e) => {
                        handleChange('notifications', {
                          ...organization.notifications,
                          accountAlerts: e.target.checked,
                        });
                        setNotificationsChanged(true);
                      }}
                    />
                  }
                  label="Account Alerts"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={organization.notifications.billingUpdates}
                      onChange={(e) => {
                        handleChange('notifications', {
                          ...organization.notifications,
                          billingUpdates: e.target.checked,
                        });
                        setNotificationsChanged(true);
                      }}
                    />
                  }
                  label="Billing and Plan Updates"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={organization.notifications.productAnnouncements}
                      onChange={(e) => {
                        handleChange('notifications', {
                          ...organization.notifications,
                          productAnnouncements: e.target.checked,
                        });
                        setNotificationsChanged(true);
                      }}
                    />
                  }
                  label="Product Announcements"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* API & Webhooks */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <VpnKeyIcon sx={{ mr: 1 }} />
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                API & Webhooks
              </Typography>
              {apiWebhooksChanged && (
                <Box ml={2}>
                  <Button
                    variant="outlined"
                    startIcon={<CancelIcon />}
                    onClick={() => {
                      setOrganization(mockOrganization);
                      setApiWebhooksChanged(false);
                    }}
                    sx={{ mr: 1 }}
                  >
                    Discard
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    onClick={() => handleSave('apiWebhooks')}
                  >
                    Save
                  </Button>
                </Box>
              )}
            </Box>
            <Divider />
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={organization.webhooksEnabled}
                      onChange={(e) => {
                        handleChange('webhooksEnabled', e.target.checked);
                        setApiWebhooksChanged(true);
                      }}
                    />
                  }
                  label="Enable Webhooks"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="API Key"
                  value={organization.apiKey}
                  onChange={(e) => {
                    handleChange('apiKey', e.target.value);
                    setApiWebhooksChanged(true);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Webhook URL"
                  value={organization.webhookUrl}
                  onChange={(e) => {
                    handleChange('webhookUrl', e.target.value);
                    setApiWebhooksChanged(true);
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Security */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <SecurityIcon sx={{ mr: 1 }} />
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Security
              </Typography>
              {securityChanged && (
                <Box ml={2}>
                  <Button
                    variant="outlined"
                    startIcon={<CancelIcon />}
                    onClick={() => {
                      setOrganization(mockOrganization);
                      setSecurityChanged(false);
                    }}
                    sx={{ mr: 1 }}
                  >
                    Discard
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    onClick={() => handleSave('security')}
                  >
                    Save
                  </Button>
                </Box>
              )}
            </Box>
            <Divider />
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={organization.twoFactorAuthEnabled}
                      onChange={(e) => {
                        handleChange('twoFactorAuthEnabled', e.target.checked);
                        setSecurityChanged(true);
                      }}
                    />
                  }
                  label="Enable Two-Factor Authentication (2FA)"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Session Timeout (minutes)"
                  type="number"
                  value={organization.sessionTimeout}
                  onChange={(e) => {
                    handleChange('sessionTimeout', e.target.value);
                    setSecurityChanged(true);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={organization.automaticSessionExpiry}
                      onChange={(e) => {
                        handleChange('automaticSessionExpiry', e.target.checked);
                        setSecurityChanged(true);
                      }}
                    />
                  }
                  label="Enable Automatic Session Expiry"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={organization.accountActivityMonitoring}
                      onChange={(e) => {
                        handleChange('accountActivityMonitoring', e.target.checked);
                        setSecurityChanged(true);
                      }}
                    />
                  }
                  label="Monitor Suspicious Account Activities"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SettingsTab;
