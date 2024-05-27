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
const setValidityOfCoupon = createAction('alert/setValidityOfCoupon');
const invalidateExpiredCoupons = createAction('alert/invalidateExpiredCoupons');
const removeCouponFromCart = createAction('alert/removeCouponFromCart');
const leaveCartAsIs = createAction('alert/leaveCartAsIs');
const setCouponInCart = createAction('alert/setCouponInCart');
const setCouponDiscount = createAction('alert/setCouponDiscount');
const setCouponEmail = createAction('alert/setCouponEmail');
const expireNewsletterCoupon = createAction('alert/expireNewsletterCoupon');

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
  setValidityOfCoupon,
  invalidateExpiredCoupons,
  removeCouponFromCart,
  leaveCartAsIs,
  setCouponInCart,
  setCouponDiscount,
  setCouponEmail,
  expireNewsletterCoupon,
};
