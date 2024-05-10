import { createReducer } from '@reduxjs/toolkit';
import { setCart, setAvailableCoupons } from 'models/actions/cartActions';
import { clearOrder } from 'models/actions/checkoutActions';

const initialState = {
  cart: [],
  availableCoupons: [],
  couponIsUsed: false,
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
    .addCase(clearOrder, (state, action) => ({
      ...initialState,
    }));
});

export default cartReducer;
