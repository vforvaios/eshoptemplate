import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  cart: {
    id: 1,
    items: [
      {
        id: 1,
        productId: 1,
        productDescription: 'Product 1',
        total: 2,
      },
      {
        id: 2,
        productId: 2,
        productDescription: 'Product 2',
        total: 6,
      },
      {
        id: 3,
        productId: 3,
        productDescription: 'Product 3',
        total: 1,
      },
    ],
  },
};
const cartReducer = createReducer(initialState, {
  // [increaseCounterAction.type]: (state, action) => ({
  //   ...state,
  //   counter: state?.counter + action.payload,
  // }),
});

export default cartReducer;
