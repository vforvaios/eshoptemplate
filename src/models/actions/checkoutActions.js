import { createAction } from '@reduxjs/toolkit';

const getPaymentMethods = createAction('checkout/getPaymentMethods');
const setPaymentMethods = createAction('checkout/setPaymentMethods');
const checkPaymentMethod = createAction('checkout/checkPaymentMethod');

export { getPaymentMethods, setPaymentMethods, checkPaymentMethod };
