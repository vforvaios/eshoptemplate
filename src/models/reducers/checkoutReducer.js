import { createReducer } from '@reduxjs/toolkit';
import { setPaymentMethods } from 'models/actions/checkoutActions';

const initialState = {
  paymentMethods: [],
};

const checkoutReducer = createReducer(initialState, {
  [setPaymentMethods.type]: (state, action) => ({
    ...state,
    paymentMethods: action.payload,
  }),
});

export default checkoutReducer;
