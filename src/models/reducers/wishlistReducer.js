/* eslint-disable max-len */
import { createReducer } from '@reduxjs/toolkit';
import { setWishlist } from 'models/actions/wishlistActions';

const initialState = {
  wishlist: [],
};
const wishlistReducer = createReducer(initialState, {
  [setWishlist.type]: (state, action) => ({
    ...state,
    wishlist: action.payload.results,
  }),
});

export default wishlistReducer;
