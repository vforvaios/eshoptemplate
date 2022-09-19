import { createAction } from '@reduxjs/toolkit';

const getPaymentMethods = createAction('checkout/getPaymentMethods');
const setPaymentMethods = createAction('checkout/setPaymentMethods');
const checkPaymentMethod = createAction('checkout/checkPaymentMethod');

const getShippingMethods = createAction('checkout/getShippingMethods');
const setShippingMethods = createAction('checkout/setShippingMethods');
const checkShippingMethod = createAction('checkout/checkShippingMethod');

const setBillingInfo = createAction('checkout/setBillingInfo');
const setShippingInfo = createAction('checkout/setShippingInfo');
const setReceipt = createAction('checkout/setReceipt');
const setSameAsBilling = createAction('checkout/setSameAsBilling');

const sendOrder = createAction('checkout/sendOrder');
const navigateToSuccessCheckout = createAction(
  'checkout/navigateToSuccessCheckout',
);
const clearOrder = createAction('checkout/clearOrder');

export {
  getPaymentMethods,
  setPaymentMethods,
  checkPaymentMethod,
  getShippingMethods,
  setShippingMethods,
  checkShippingMethod,
  setBillingInfo,
  setShippingInfo,
  setReceipt,
  setSameAsBilling,
  sendOrder,
  navigateToSuccessCheckout,
  clearOrder,
};
