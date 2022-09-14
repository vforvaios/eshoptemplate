import { createReducer } from '@reduxjs/toolkit';
import {
  setPaymentMethods,
  setShippingMethods,
} from 'models/actions/checkoutActions';

const initialState = {
  paymentMethods: [],
  shippingMethods: [],
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
});

export default checkoutReducer;
