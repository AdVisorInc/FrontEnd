// pricing-and-billing.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Button } from '@mui/material';
import MyCardsSelect from "../radio-groups/my-cards/my-cards-select";
import MyCards from "../radio-groups/my-cards/my-cards";

interface PricingAndBillingProps {
  organizationData: any;
  setOrganizationData: (data: any) => void;
}

const PricingAndBilling: React.FC<PricingAndBillingProps> = ({ organizationData, setOrganizationData }) => {
  const { t } = useTranslation();
  const [billingSettings, setBillingSettings] = useState(null);

  const handlePricingPlanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrganizationData({
      ...organizationData,
      pricingPlan: (event.target as HTMLInputElement).value,
    });
  };

  const handleCreateBillingSettings = () => {
    const mockedBillingSettings = {
      paymentMethod: 'Credit Card',
      cardNumber: '**** **** **** 1234',
      expiryDate: '12/2024',
      billingAddress: '123 Main St, City, Country',
    };

    setBillingSettings(mockedBillingSettings);
    setOrganizationData({
      ...organizationData,
      billingSettings: mockedBillingSettings,
    });
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          {t('Select a Pricing Plan')}
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="pricing-plan"
            name="pricing-plan"
            value={organizationData.pricingPlan || ''}
            onChange={handlePricingPlanChange}
          >
            <FormControlLabel value="free" control={<Radio />} label={t('Free')} />
            <FormControlLabel value="standard" control={<Radio />} label={t('Standard')} />
            <FormControlLabel value="premium" control={<Radio />} label={t('Premium')} />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          {t('Billing Settings')}
        </Typography>
        {billingSettings ? (
            <MyCards/>
        ) : (
          <>
            <Typography>{t('No billing settings found.')}</Typography>
            <Button variant="contained" color="primary" onClick={handleCreateBillingSettings}>
              {t('Create Billing Settings')}
            </Button>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default PricingAndBilling;
