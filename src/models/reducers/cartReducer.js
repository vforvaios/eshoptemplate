import { createReducer } from '@reduxjs/toolkit';

import {
  setCart,
  setAvailableCoupons,
  setCouponInCart,
  removeCouponFromCart,
  leaveCartAsIs,
  setCouponDiscount,
  setCouponEmail,
} from '@/models/actions/cartActions';
import { clearOrder } from '@/models/actions/checkoutActions';

const initialState = {
  cart: [],
  availableCoupons: [],
  couponUsed: '',
  couponDiscount: 0,
  couponEmail: '',
};
const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCart, (state, action) => ({
      ...state,
      cart: action.payload,
    }))
    .addCase(leaveCartAsIs, (state, action) => ({
      ...state,
    }))
    .addCase(setAvailableCoupons, (state, action) => ({
      ...state,
      availableCoupons: action.payload,
    }))
    .addCase(setCouponInCart, (state, action) => ({
      ...state,
      couponUsed: action.payload,
    }))
    .addCase(setCouponEmail, (state, action) => ({
      ...state,
      couponEmail: action.payload,
    }))
    .addCase(removeCouponFromCart, (state, action) => ({
      ...state,
      couponUsed: '',
    }))
    .addCase(setCouponDiscount, (state, action) => ({
      ...state,
      couponDiscount: action.payload,
    }))
    .addCase(clearOrder, (state, action) => ({
      ...initialState,
    }));
});

export default cartReducer;
