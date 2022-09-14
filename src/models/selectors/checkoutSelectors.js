const paymentMethods = ({ checkoutReducer }) => checkoutReducer?.paymentMethods;
const shippingMethods = ({ checkoutReducer }) =>
  checkoutReducer?.shippingMethods;

export { paymentMethods, shippingMethods };
