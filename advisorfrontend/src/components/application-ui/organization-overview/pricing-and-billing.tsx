// pricing-and-billing.tsx
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Card, CardContent, Box } from '@mui/material';
import { useDispatch, useSelector } from 'src/store';
import { RootState } from 'src/store';
import { fetchProducts } from 'src/slices/stripe';
import MyCardsSelectForSubscription from "../radio-groups/my-cards/my-cards-select-for-subscription";

interface PricingAndBillingProps {
  organizationData: any;
  setOrganizationData: (data: any) => void;
  validationErrors: {
    pricingPlan: boolean;
    billingSettings: boolean;
  };
}

const PricingAndBilling: React.FC<PricingAndBillingProps> = ({ organizationData, setOrganizationData, validationErrors }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { products, prices, isLoading } = useSelector((state: RootState) => state.stripe);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const getProductPrice = (productId: string) => {
    const productPrices = prices.filter((price) => price.product === productId);
    if (productPrices.length > 0) {
      const price = productPrices[0];
      return `${price.unit_amount / 100} ${price.currency.toUpperCase()} / ${price.recurring.interval}`;
    }
    return 'Price not available';
  };

  const handlePricingPlanSelect = (productId: string, productName: string) => {
    setOrganizationData({
      ...organizationData,
      pricingPlan: {
        id: productId,
        name: productName,
      },
    });
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom color={validationErrors.pricingPlan ? 'error' : 'inherit'}>
          {t('Select a Pricing Plan')}
        </Typography>
        {validationErrors.pricingPlan && (
          <Typography variant="caption" color="error">
            Please select a pricing plan
          </Typography>
        )}
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  border: organizationData.pricingPlan?.id === product.id ? '2px solid' : '1px solid',
                  borderColor: organizationData.pricingPlan?.id === product.id ? 'primary.main' : 'divider',
                }}
                onClick={() => handlePricingPlanSelect(product.id, product.name)}
              >
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {getProductPrice(product.id)}
                  </Typography>
                  <Box mt={2}>
                    <ul>
                      {product.metadata.adPlatforms && (
                        <li>{product.metadata.adPlatforms} Ad Platforms</li>
                      )}
                      {product.metadata.campaigns && (
                        <li>{product.metadata.campaigns} Campaigns</li>
                      )}
                      {product.metadata.analytics && <li>{product.metadata.analytics}</li>}
                      {product.metadata.recommendations && <li>AI-Driven Recommendations</li>}
                      {product.metadata.reporting && <li>{product.metadata.reporting} Reporting</li>}
                    </ul>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom color={validationErrors.billingSettings ? 'error' : 'inherit'}>
          {t('Billing Settings')}
        </Typography>
        {validationErrors.billingSettings && (
          <Typography variant="caption" color="error">
            Please select a payment method
          </Typography>
        )}
        <MyCardsSelectForSubscription
          selectedCard={organizationData.billingSettings?.selectedCard}
          onCardSelect={(selectedCard) =>
            setOrganizationData({
              ...organizationData,
              billingSettings: {
                ...organizationData.billingSettings,
                selectedCard,
              },
            })
          }
        />
      </Grid>
    </Grid>
  );
};

export default PricingAndBilling;
