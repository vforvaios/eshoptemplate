import { createAction } from '@reduxjs/toolkit';

const getPaymentMethods = createAction('checkout/getPaymentMethods');
const setPaymentMethods = createAction('checkout/setPaymentMethods');
const checkPaymentMethod = createAction('checkout/checkPaymentMethod');

const getShippingMethods = createAction('checkout/getShippingMethods');
const setShippingMethods = createAction('checkout/setShippingMethods');
const checkShippingMethod = createAction('checkout/checkShippingMethod');

export {
  getPaymentMethods,
  setPaymentMethods,
  checkPaymentMethod,
  getShippingMethods,
  setShippingMethods,
  checkShippingMethod,
};
