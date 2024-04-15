import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Unstable_Grid2 as Grid,
  ListItemButton,
  Radio,
  Stack,
  Tooltip,
  Typography,
  useTheme, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField,
} from '@mui/material';
import React, {useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { CardAddActionDashed } from 'src/components/base/styles/card';
import {AppThunk, useDispatch, useSelector} from 'src/store';
import {RootState} from "../../../../store";
import {
  addPaymentMethod,
  createSetupIntent,
  fetchOrCreateCustomer,
  fetchPaymentMethods, removePaymentMethod, updateBillingDetails, updateDefaultPaymentMethod
} from "../../../../slices/stripe";
import {
  AddressElement, AddressElementComponent,
  CardElement,
  CardElementComponent, Elements, ElementsConsumer,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import { alpha } from '@mui/material/styles';

interface Item {
  id: number;
  image: string;
  cc: string;
  expires: string;
  title: string;
}

const MyCardsSelect = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const {data: user, isLoaded, error} = useSelector((state: RootState) => state.userProfile);
  const dispatch = useDispatch();
  const {
    customerId,
    setupIntentClientSecret,
    paymentMethods
  } = useSelector((state: RootState) => state.stripe);
  const stripe = useStripe();
  const elements = useElements();
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

  const handleAddCard = async (elements: any | null) => {
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement) as CardElementComponent;
    const addressElement = elements.getElement(AddressElement) as AddressElementComponent;

    if (!addressElement) {
      console.error('AddressElement not found');
      return;
    }

    const { error: addressError, value: billingDetails } = await addressElement.getValue();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: billingDetails.name,
        email: billingDetails.email,
        phone: billingDetails.phone,
        address: {
          line1: billingDetails.address.line1,
          city: billingDetails.address.city,
          state: billingDetails.address.state,
          postal_code: billingDetails.address.postal_code,
          country: billingDetails.address.country,
        },
      },
    });

    if (error) {
      console.error('Failed to create payment method:', error);
      toast.error('Failed to add card. Please try again.');
    } else {
      dispatch(addPaymentMethod(customerId, paymentMethod.id));
      dispatch(updateBillingDetails(customerId, billingDetails));
      setOpenDialog(false);
      toast.success('New card added successfully!');
    }
  };
  const stripeElementStyle = {
    base: {
      fontSize: '16px',
      color: `${theme.palette.text.primary} !important`,
      backgroundColor: `${theme.palette.background.paper} !important`,
      '::placeholder': {
        color: `${theme.palette.text.secondary} !important`,
        backgroundColor: `${alpha(theme.palette.background.paper, 0.5)} !important`,
      },
      ':-webkit-autofill': {
        WebkitTextFillColor: `${theme.palette.text.primary} !important`,
      },
    },
    invalid: {
      color: `${theme.palette.error.main} !important`,
    },
  };
  const appearance = {
    theme: 'stripe' as const,
    variables: {
      fontFamily: theme.typography.fontFamily,
      fontSizeBase: '16px',
      colorText: theme.palette.text.primary,
      colorTextPlaceholder: theme.palette.text.secondary,
      colorBackground: theme.palette.background.paper,
    },
  };

  return (
    <Grid
      container
      columns={24}
      spacing={2}
    >
      {paymentMethods.map((item) => (
        <Grid
          key={item.id}
          xs={24}
          md={12}
          lg={9}
        >
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
                  elevation={8}
                  sx={{
                    display: 'flex',
                    px: 2,
                    mr: 2,
                    py: 1.5,
                    img: {
                      width: 'auto',
                      height: 28,
                    },
                  }}
                >
                  <img src={`/placeholders/logo/${item.card.brand.toLowerCase()}.png`}
                       alt={item.card.brand}/>
                </Card>
                <Box flex={1}>
                  <Typography
                    variant="h4"
                    fontWeight={500}
                    lineHeight={1}
                    gutterBottom
                  >
                    •••• {item.card.last4}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    color="text.secondary"
                  >
                    {t('Expires')}:{' '}
                    <Typography
                      component="span"
                      variant="h6"
                      color="text.primary"
                    >
                      {item.card.exp_month}/{item.card.exp_year}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Stack
                direction="row"
                alignItems="center"
                width="100%"
                px={2}
                py={1}
              >
                <Radio
                  checked={selectedValue === item.id}
                  onChange={handleChange}
                  value={item.id}
                  size="small"
                  edge="start"
                  name="radio-buttons"
                  inputProps={{'aria-label': 'Set' + item.card.brand + 'as primary card'}}
                  color="primary"
                />
                <Typography
                  variant="h6"
                  noWrap
                >
                  {t('Primary')}
                </Typography>
              </Stack>
              <Tooltip
                arrow
                title={t('Remove this card')}
              >
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
                  <DeleteTwoToneIcon fontSize="small"/>
                </ButtonIcon>
              </Tooltip>
            </ListItemButton>
          </Card>
        </Grid>
      ))}
      <Grid
        xs={24}
        lg={6}
      >
        <CardAddActionDashed
          variant="outlined"
          elevation={0}
          sx={{minWidth: 160, flex: 1}}
        >
          <CardActionArea onClick={handleOpenDialog}>
            <CardContent>
              <Stack
                spacing={0.5}
                justifyContent="center"
                direction="column"
                alignItems="center"
              >
                <AddRoundedIcon
                  sx={{
                    color: 'primary.main',
                  }}
                />
                <Box>
                  <Typography
                    textAlign="center"
                    variant="h5"
                  >
                    Add new card
                  </Typography>
                  <Typography
                    textAlign="center"
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    Click to add a new card
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </CardActionArea>
        </CardAddActionDashed>
      </Grid>
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{t('Add a New Card')}</DialogTitle>
        <DialogContent>
          <Elements stripe={stripe} options={{ appearance }}>
            <ElementsConsumer>
              {({ elements }) => (
                <>
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
                  <Box mt={2}>
                    <AddressElement
                      options={{
                        mode: 'billing',
                        autocomplete: {
                          mode: 'google_maps_api',
                          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
                        },
                      }}
                    />
                  </Box>
                  <DialogActions>
                    <Button onClick={handleCloseDialog}>{t('Cancel')}</Button>
                    <Button variant="contained" onClick={() => handleAddCard(elements)}>
                      {t('Add Card')}
                    </Button>
                  </DialogActions>
                </>
              )}
            </ElementsConsumer>
          </Elements>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default MyCardsSelect;


