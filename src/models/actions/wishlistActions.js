import { createAction } from '@reduxjs/toolkit';

const getWishlist = createAction('wishlist/getWishlist');
const setWishlist = createAction('wishlist/setWishlist');

export { getWishlist, setWishlist };
