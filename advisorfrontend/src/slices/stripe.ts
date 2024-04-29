import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import { toast } from 'react-hot-toast';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, { apiVersion: '2024-04-10' });

interface StripeState {
  isLoading: boolean;
  error: string | null;
  customerId: string | null;
  setupIntentClientSecret: string | null;
  paymentMethods: Stripe.PaymentMethod[];
  cards: Stripe.Card[];
  invoices: Stripe.Invoice[];
  upcomingInvoice: Stripe.UpcomingInvoice | null;
  subscriptions: Stripe.Subscription[];
  products: Stripe.Product[];
  prices: Stripe.Price[];
  billingDetails: {
    name: string | null;
    email: string | null;
    phone: string | null;
    address: Stripe.Address | null;
  } | null;
}

const initialState: StripeState = {
  isLoading: false,
  error: null,
  customerId: null,
  setupIntentClientSecret: null,
  paymentMethods: [],
  cards: [],
  invoices: [],
  products: [],
  upcomingInvoice: null,
  subscriptions: [],
  billingDetails: null,
  prices: [],
};

const slice = createSlice({
  name: 'stripe',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    updateCustomerId(state, action: PayloadAction<string>) {
      state.customerId = action.payload;
    },
    updateSetupIntentClientSecret(state, action: PayloadAction<string>) {
      state.setupIntentClientSecret = action.payload;
    },
    updatePaymentMethods(state, action: PayloadAction<Stripe.PaymentMethod[]>) {
      state.paymentMethods = action.payload;
    },
    updateCards(state, action: PayloadAction<Stripe.Card[]>) {
      state.cards = action.payload;
    },
    updateInvoices(state, action: PayloadAction<Stripe.Invoice[]>) {
      state.invoices = action.payload;
    },
    updateUpcomingInvoice(state, action: PayloadAction<Stripe.UpcomingInvoice | null>) {
      state.upcomingInvoice = action.payload;
    },
    updateSubscriptions(state, action: PayloadAction<Stripe.Subscription[]>) {
      state.subscriptions = action.payload;
    },
    updateProducts(state, action: PayloadAction<Stripe.Product[]>) {
      state.products = action.payload;
    },
    updatePrices(state, action: PayloadAction<Stripe.Price[]>) {
      state.prices = action.payload;
    },
    updateBillingDetails(state, action: PayloadAction<{
      name: string | null;
      email: string | null;
      phone: string | null;
      address: Stripe.Address | null;
    } | null>) {
      state.billingDetails = action.payload;
    },
  },
});

export const { reducer } = slice;

export const fetchOrCreateCustomer = (email: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const customers = await stripe.customers.list({ email, limit: 1 });
    if (customers.data.length > 0) {
      const customerId = customers.data[0].id;
      dispatch(slice.actions.updateCustomerId(customerId));
    } else {
      const customer = await stripe.customers.create({ email });
      dispatch(slice.actions.updateCustomerId(customer.id));
    }
  } catch (error) {
    dispatch(slice.actions.setError('Failed to fetch or create customer'));
    toast.error('Failed to fetch or create customer');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};

export const createSetupIntent = (customerId: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const setupIntent = await stripe.setupIntents.create({ customer: customerId });
    dispatch(slice.actions.updateSetupIntentClientSecret(setupIntent.client_secret));
  } catch (error) {
    dispatch(slice.actions.setError('Failed to create setup intent'));
    toast.error('Failed to create setup intent');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};

export const fetchPaymentMethods = (customerId: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const paymentMethods = await stripe.paymentMethods.list({ customer: customerId, type: 'card' });
    dispatch(slice.actions.updatePaymentMethods(paymentMethods.data));
  } catch (error) {
    dispatch(slice.actions.setError('Failed to fetch payment methods'));
    toast.error('Failed to fetch payment methods');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};

export const fetchCards = (customerId: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const cards = await stripe.customers.listSources(customerId, { object: 'card' }) as Stripe.ApiList<Stripe.Card>;
    dispatch(slice.actions.updateCards(cards.data));
  } catch (error) {
    dispatch(slice.actions.setError('Failed to fetch cards'));
    toast.error('Failed to fetch cards');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};

export const addCard = (customerId: string, token: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const card = await stripe.customers.createSource(customerId, { source: token });
    dispatch(fetchCards(customerId));
  } catch (error) {
    dispatch(slice.actions.setError('Failed to add card'));
    toast.error('Failed to add card');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};
export const addPaymentMethod = (customerId: string, paymentMethodId: string): AppThunk => async (dispatch) => {
  try {
    const paymentMethod = await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    });
    console.log('Added payment method:', paymentMethod);
    dispatch(fetchPaymentMethods(customerId));
  } catch (error) {
    console.error('Failed to add payment method:', error);
    toast.error('Failed to add payment method', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};
export const removePaymentMethod = (paymentMethodId: string): AppThunk => async (dispatch, getState) => {
  try {
    const paymentMethod = await stripe.paymentMethods.detach(paymentMethodId);
    console.log('Removed payment method:', paymentMethod);

    // Get the customerId from the Redux state
    const { customerId } = getState().stripe;

    if (customerId) {
      // Fetch payment methods using the customerId from the state
      dispatch(fetchPaymentMethods(customerId));
    } else {
      console.warn('CustomerId not found in the state');
    }
  } catch (error) {
    console.error('Failed to remove payment method:', error);
    toast.error('Failed to remove payment method', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};
export const removeCard = (customerId: string, cardId: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    await stripe.customers.deleteSource(customerId, cardId);
    dispatch(fetchCards(customerId));
  } catch (error) {
    dispatch(slice.actions.setError('Failed to remove card'));
    toast.error('Failed to remove card');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};

export const updateDefaultPaymentMethod = (customerId: string, paymentMethodId: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    await stripe.customers.update(customerId, { invoice_settings: { default_payment_method: paymentMethodId } });
    dispatch(fetchPaymentMethods(customerId));
  } catch (error) {
    dispatch(slice.actions.setError('Failed to update default payment method'));
    toast.error('Failed to update default payment method');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};

export const fetchInvoices = (customerId: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const invoices = await stripe.invoices.list({ customer: customerId });
    dispatch(slice.actions.updateInvoices(invoices.data));
  } catch (error) {
    dispatch(slice.actions.setError('Failed to fetch invoices'));
    toast.error('Failed to fetch invoices');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};

export const fetchUpcomingInvoice = (customerId: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const upcomingInvoice = await stripe.invoices.retrieveUpcoming({ customer: customerId });
    dispatch(slice.actions.updateUpcomingInvoice(upcomingInvoice));
  } catch (error) {
    dispatch(slice.actions.setError('Failed to fetch upcoming invoice'));
    toast.error('Failed to fetch upcoming invoice');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};

export const fetchSubscriptions = (customerId: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const subscriptions = await stripe.subscriptions.list({ customer: customerId });
    dispatch(slice.actions.updateSubscriptions(subscriptions.data));
  } catch (error) {
    dispatch(slice.actions.setError('Failed to fetch subscriptions'));
    toast.error('Failed to fetch subscriptions');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};
export const fetchProducts = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const products = await stripe.products.list({
      expand: ['data.default_price'],
      active: true,
    });
    dispatch(slice.actions.updateProducts(products.data));

    // Fetch prices for each product
    const pricePromises = products.data.map((product) =>
      stripe.prices.list({ product: product.id })
    );
    const priceResponses = await Promise.all(pricePromises);
    const prices = priceResponses.flatMap((response) => response.data);
    dispatch(slice.actions.updatePrices(prices));
  } catch (error) {
    dispatch(slice.actions.setError('Failed to fetch products and prices'));
    toast.error('Failed to fetch products and prices');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};
export const fetchPrices = (productIds: string[]): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    console.log("Oi",productIds)
    const prices = await Promise.all(
      productIds.map((productId) =>
        stripe.prices.list({ product: productId, expand: ['data.product'] })
      )
    );
    const flattenedPrices = prices.flatMap((price) => price.data);
    dispatch(slice.actions.updatePrices(flattenedPrices));
  } catch (error) {
    dispatch(slice.actions.setError('Failed to fetch prices'));
    toast.error('Failed to fetch prices');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};
export const createSubscription = (customerId: string, productId: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const prices = await stripe.prices.list({ product: productId, active: true, limit: 1 });

    if (prices.data.length === 0) {
      throw new Error('No active price found for the product');
    }

    const priceId = prices.data[0].id;

    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
    });
    dispatch(fetchSubscriptions(customerId));
    toast.success('Subscription created successfully');
  } catch (error) {
    dispatch(slice.actions.setError('Failed to create subscription'));
    toast.error('Failed to create subscription');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};export const fetchBillingDetails = (customerId: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const response = await stripe.customers.retrieve(customerId);

    if ('deleted' in response && response.deleted) {
      dispatch(slice.actions.updateBillingDetails(null));
    } else {
      const customer = response as Stripe.Customer;
      const { name, email, phone, address } = customer;
      dispatch(slice.actions.updateBillingDetails({ name, email, phone, address }));
    }
  } catch (error) {
    dispatch(slice.actions.setError('Failed to fetch billing details'));
    toast.error('Failed to fetch billing details');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};


export const updateBillingDetails = (customerId: string, billingDetails: {
  name?: string;
  email?: string;
  phone?: string;
  address?: Stripe.AddressParam;
}): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const customer = await stripe.customers.update(customerId, billingDetails);
    const { name, email, phone, address } = customer;
    dispatch(slice.actions.updateBillingDetails({ name, email, phone, address }));
  } catch (error) {
    dispatch(slice.actions.setError('Failed to update billing details'));
    toast.error('Failed to update billing details');
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};
