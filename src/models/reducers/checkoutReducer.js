import { createReducer } from '@reduxjs/toolkit';
import {
  setPaymentMethods,
  setShippingMethods,
  setBillingInfo,
  setShippingInfo,
  setReceipt,
  setSameAsBilling,
} from 'models/actions/checkoutActions';

const initialState = {
  paymentMethods: [],
  shippingMethods: [],
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
  },
  receipt: 'receipt',
  sameAsBilling: true,
};

const checkoutReducer = createReducer(initialState, {
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
});

export default checkoutReducer;
