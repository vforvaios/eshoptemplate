import { createReducer } from '@reduxjs/toolkit';
import { setCart } from 'models/actions/cartActions';
import { clearOrder } from 'models/actions/checkoutActions';

const initialState = {
  cart: [],
};
const cartReducer = createReducer(initialState, {
  [setCart.type]: (state, action) => ({
    ...state,
    cart: action.payload,
  }),
  [clearOrder.type]: (state, action) => ({
    ...initialState,
  }),
});

export default cartReducer;
