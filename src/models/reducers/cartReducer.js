import { createReducer } from '@reduxjs/toolkit';
import { setCart } from 'models/actions/cartActions';

const initialState = {
  cart: [],
};
const cartReducer = createReducer(initialState, {
  [setCart.type]: (state, action) => ({
    ...state,
    cart: action.payload,
  }),
});

export default cartReducer;
