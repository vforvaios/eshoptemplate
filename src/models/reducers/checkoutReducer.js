import { createReducer } from '@reduxjs/toolkit';
import {
  setPaymentMethods,
  setShippingMethods,
  setBillingInfo,
  setShippingInfo,
  setReceipt,
  setSameAsBilling,
  clearOrder,
  setCheckoutError,
  setOrderOk,
  setCanSeeSuccessPage,
  setUpdatedProducts,
  setCountries,
} from 'models/actions/checkoutActions';

const initialState = {
  updatedProducts: false,
  billingErrors: [],
  shippingErrors: [],
  paymentMethods: [],
  shippingMethods: [],
  countries: [],
  billingInfo: {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    mobile: '',
    address: '',
    postCode: '',
    city: '',
    region: '',
    country: 81,
    prefecture: 1,
  },
  shippingInfo: {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    mobile: '',
    address: '',
    postCode: '',
    city: '',
    region: '',
    country: 81,
    prefecture: 1,
  },
  receipt: 'receipt',
  sameAsBilling: true,
  orderOK: false,
  canSeeSuccessPage: false,
};

const checkoutReducer = createReducer(initialState, {
  [setCountries.type]: (state, action) => ({
    ...state,
    countries: action.payload,
  }),
  [setUpdatedProducts.type]: (state, action) => ({
    ...state,
    updatedProducts: action.payload,
  }),
  [setPaymentMethods.type]: (state, action) => ({
    ...state,
    paymentMethods: action.payload,
  }),
  [setShippingMethods.type]: (state, action) => ({
    ...state,
    shippingMethods: action.payload,
  }),
  [setReceipt.type]: (state, action) => ({
    ...state,
    receipt: action.payload,
  }),
  [setSameAsBilling.type]: (state, action) => ({
    ...state,
    sameAsBilling: action.payload,
  }),
  [setBillingInfo.type]: (state, action) => ({
    ...state,
    billingInfo: {
      ...state?.billingInfo,
      [action.payload.key]: action.payload.name,
    },
  }),
  [setShippingInfo.type]: (state, action) => ({
    ...state,
    shippingInfo: {
      ...state?.shippingInfo,
      [action.payload.key]: action.payload.name,
    },
  }),
  [clearOrder.type]: (state) => ({
    ...initialState,
  }),
  [setCheckoutError.type]: (state, action) => ({
    ...state,
    billingErrors: action.payload.billingErrors,
    shippingErrors: action.payload.shippingErrors,
  }),
  [setOrderOk.type]: (state, action) => ({
    ...state,
    orderOK: true,
  }),
  [setCanSeeSuccessPage.type]: (state, action) => ({
    ...state,
    canSeeSuccessPage: true,
  }),
});

export default checkoutReducer;
