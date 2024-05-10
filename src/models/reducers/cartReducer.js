import { createReducer } from '@reduxjs/toolkit';
import {
  setCart,
  setAvailableCoupons,
  setValidityOfCoupon,
} from 'models/actions/cartActions';
import { clearOrder } from 'models/actions/checkoutActions';

const initialState = {
  cart: [],
  availableCoupons: [],
  couponUsed: {},
};
const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCart, (state, action) => ({
      ...state,
      cart: action.payload,
    }))
    .addCase(setAvailableCoupons, (state, action) => ({
      ...state,
      availableCoupons: action.payload,
    }))
    .addCase(setValidityOfCoupon, (state, action) => ({
      ...state,
      couponUsed: Object.keys(action.payload).length > 0 ? action.payload : {},
    }))
    .addCase(clearOrder, (state, action) => ({
      ...initialState,
    }));
});

export default cartReducer;
