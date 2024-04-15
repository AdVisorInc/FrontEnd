import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  ListItemButton,
  Radio,
  Stack,
  Tooltip,
  Typography,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { CardAddActionDashed } from 'src/components/base/styles/card';
import { RootState, useDispatch, useSelector } from 'src/store';
import {
  fetchOrCreateCustomer,
  fetchPaymentMethods,
  createSetupIntent,
  addPaymentMethod,
  removePaymentMethod,
  updateDefaultPaymentMethod,
} from 'src/slices/stripe';

import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  CardElementComponent,
} from '@stripe/react-stripe-js';
import Stripe from "stripe";

const MyCardsSelect = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const { data: user, isLoaded, error } = useSelector((state: RootState) => state.userProfile);
  const { customerId, setupIntentClientSecret, paymentMethods } = useSelector((state: RootState) => state.stripe);

  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (user && user.email) {
      dispatch(fetchOrCreateCustomer(user.email));
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (customerId) {
      dispatch(fetchPaymentMethods(customerId));
      dispatch(createSetupIntent(customerId));
    }
  }, [customerId, dispatch]);

  useEffect(() => {
    if (paymentMethods.length > 0) {
      setSelectedValue(paymentMethods[0].id);
    }
  }, [paymentMethods]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    dispatch(updateDefaultPaymentMethod(customerId, event.target.value));
  };

  const handleDelete = async (paymentMethodId: string) => {
    dispatch(removePaymentMethod(paymentMethodId));
    toast.success('The card has been removed successfully!');
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddCard = async () => {
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement) as CardElementComponent;
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Failed to create payment method:', error);
      toast.error('Failed to add card. Please try again.');
    } else {
      dispatch(addPaymentMethod(customerId, paymentMethod.id));
      setOpenDialog(false);
      toast.success('New card added successfully!');
    }
  };

  return (
    <>
      <Grid container columns={24} spacing={2}>
        {paymentMethods.map((item: Stripe.PaymentMethod) => (
          <Grid key={item.id} xs={24} md={12} lg={9}>
            <Card
              elevation={0}
              sx={{
                border: 0,
                position: 'relative',
              }}
            >
              <ListItemButton
                sx={{
                  p: '1px',
                  flexDirection: 'column',
                  borderRadius: 'inherit',
                  boxShadow: `0 0 0 1px ${theme.palette.divider} inset`,
                  background:
                    theme.palette.mode === 'dark'
                      ? theme.palette.neutral[900]
                      : theme.palette.neutral[50],

                  '&:hover': {
                    backgroundColor: 'background.paper',
                    boxShadow: `0 0 0 1px ${theme.palette.primary.main} inset`,
                  },

                  '&.Mui-selected': {
                    backgroundColor: 'background.paper',
                    boxShadow: `0 0 0 2px ${theme.palette.primary.main} inset`,

                    '&:hover': {
                      backgroundColor: 'background.paper',
                    },
                  },
                }}
                selected={selectedValue === item.id}
                onClick={() => setSelectedValue(item.id)}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  width="100%"
                  px={2}
                  pt={2}
                  pb={1}
                >
                  <Card
                    elevation={0}
                    sx={{
                      display: 'flex',
                      px: 2,
                      mr: 2,
                      py: 1.5,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      img: {
                        width: 'auto',
                        height: 28,
                      },
                    }}
                  >
                    <img src={`/placeholders/logo/${item.card.brand.toLowerCase()}.png`} alt={item.card.brand} />
                  </Card>
                  <Box flex={1}>
                    <Typography variant="h4" fontWeight={500} lineHeight={1} gutterBottom>
                      •••• {item.card.last4}
                    </Typography>
                    <Typography variant="h6" fontWeight={500} color="text.secondary">
                      {t('Expires')}:{' '}
                      <Typography component="span" variant="h6" color="text.primary">
                        {item.card.exp_month}/{item.card.exp_year}
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
                <Stack direction="row" alignItems="center" width="100%" px={2} py={1}>
                  <Radio
                    checked={selectedValue === item.id}
                    onChange={handleChange}
                    value={item.id}
                    size="small"
                    edge="start"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'Set ' + item.card.brand + ' as primary card' }}
                    color="primary"
                  />
                  <Typography variant="h6" noWrap>
                    {t('Primary')}
                  </Typography>
                </Stack>
                <Tooltip arrow title={t('Remove this card')}>
                  <ButtonIcon
                    sx={{
                      position: 'absolute',
                      top: theme.spacing(1),
                      right: theme.spacing(1),
                    }}
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => handleDelete(item.id)}
                  >
                    <DeleteTwoToneIcon fontSize="small" />
                  </ButtonIcon>
                </Tooltip>
              </ListItemButton>
            </Card>
          </Grid>
        ))}
        <Grid xs={24} lg={6}>
          <CardAddActionDashed variant="outlined" elevation={0} sx={{ minWidth: 160, flex: 1 }}>
            <CardActionArea onClick={handleOpenDialog}>
              <CardContent>
                <Stack spacing={0.5} justifyContent="center" direction="column" alignItems="center">
                  <AddRoundedIcon sx={{ color: 'primary.main' }} />
                  <Box>
                    <Typography textAlign="center" variant="h5">
                      Add new card
                    </Typography>
                    <Typography textAlign="center" variant="subtitle1" color="text.secondary">
                      Click to add a new card
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </CardActionArea>
          </CardAddActionDashed>
        </Grid>
      </Grid>
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>{t('Add a New Card')}</DialogTitle>
        <DialogContent>
          <Box mt={2}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: theme.palette.text.primary,
                    '::placeholder': {
                      color: theme.palette.text.secondary,
                    },
                  },
                  invalid: {
                    color: theme.palette.error.main,
                  },
                },
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>{t('Cancel')}</Button>
          <Button variant="contained" onClick={handleAddCard}>
            {t('Add Card')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyCardsSelect;