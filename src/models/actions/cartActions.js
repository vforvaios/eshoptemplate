import { createAction } from '@reduxjs/toolkit';

const getCart = createAction('alert/getCart');
const setCart = createAction('alert/setCart');
const addToCart = createAction('alert/addToCart');
const removeItemFromCart = createAction('alert/removeItemFromCart');

const updateCartItemTotal = createAction('alert/updateCartItemTotal');
const navigateBackToCart = createAction('alert/navigateBackToCart');
const getAvailableCoupons = createAction('alert/getAvailableCoupons');
const setAvailableCoupons = createAction('alert/setAvailableCoupons');
const applyCouponInCart = createAction('alert/applyCouponInCart');

export {
  getCart,
  setCart,
  addToCart,
  removeItemFromCart,
  updateCartItemTotal,
  navigateBackToCart,
  getAvailableCoupons,
  setAvailableCoupons,
  applyCouponInCart,
};
