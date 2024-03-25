import React, { useState } from 'react';
import { Box, Button, Typography, Dialog, DialogActions, DialogContent, TextField, MenuItem, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';

interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'ended';
  platform: 'Google' | 'Meta';
  startDate: string;
  endDate?: string;
}

interface Customer {
  resourceName: string;
  id: string;
  name?: string;
}

const CampaignManager: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedCustomer(null);
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:1251/api/v1/google/list-accessible-customers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refreshToken: tokenResponse.access_token }),
        });

        if (response.ok) {
          const data = await response.json();
          const customerData = data.customers.map((customer: any) => ({
            resourceName: customer.resourceName,
            id: customer.resourceName.split('/')[1],
            name: customer.descriptiveName,
          }));
          setCustomers(customerData);
        } else {
          console.error('Failed to fetch customer list');
        }
      } catch (error) {
        console.error('Error fetching customer list:', error);
      }
      setLoading(false);
    },
    onError: (errorResponse) => {
      console.error('Login Failed:', errorResponse);
    },
    scope: 'https://www.googleapis.com/auth/adwords',
  });

  const handleAddAccount = async () => {
    if (selectedCustomer) {
      try {
        // Fetch campaigns for the selected customer
        const response = await fetch(`https://backend.advisr.app/api/v1/google/campaigns?customerId=${selectedCustomer.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCampaigns(data.campaigns);
          handleClose();
        } else {
          console.error('Failed to fetch campaigns');
        }
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    }
  };

  return (
      <>
        <Box sx={{ marginBottom: 4 }}>
          <Button variant="contained" onClick={handleOpen}>
            Add Account
          </Button>
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <CircularProgress />
                </Box>
            ) : (
                <>
                  {customers.length === 0 ? (
                      <Button variant="outlined" onClick={() => login()}>
                        Sign in with Google
                      </Button>
                  ) : (
                      <TextField
                          select
                          label="Select a Customer"
                          fullWidth
                          value={selectedCustomer?.id || ''}
                          onChange={(e) => setSelectedCustomer(customers.find((c) => c.id === e.target.value) || null)}
                          sx={{ marginTop: 2 }}
                      >
                        {customers.map((customer) => (
                            <MenuItem key={customer.id} value={customer.id}>
                              {customer.name || customer.id}
                            </MenuItem>
                        ))}
                      </TextField>
                  )}
                </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleAddAccount} disabled={!selectedCustomer}>
              Add Account
            </Button>
          </DialogActions>
        </Dialog>
        <Grid container spacing={2}>
          {campaigns.map((campaign) => (
              <Grid item xs={12} sm={6} md={4} key={campaign.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{campaign.name}</Typography>
                    <Typography>Status: {campaign.status}</Typography>
                    <Typography>Platform: {campaign.platform}</Typography>
                    <Typography>Start Date: {campaign.startDate}</Typography>
                    {campaign.endDate && <Typography>End Date: {campaign.endDate}</Typography>}
                  </CardContent>
                </Card>
              </Grid>
          ))}
        </Grid>
      </>
  );
};

export default CampaignManager;