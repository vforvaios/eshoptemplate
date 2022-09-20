const paymentMethods = ({ checkoutReducer }) => checkoutReducer?.paymentMethods;

const shippingMethods = ({ checkoutReducer }) =>
  checkoutReducer?.shippingMethods;

const receipt = ({ checkoutReducer }) => checkoutReducer.receipt;

const billingInfo = ({ checkoutReducer }) => checkoutReducer.billingInfo;

const shippingInfo = ({ checkoutReducer }) => checkoutReducer.shippingInfo;

const sameAsBilling = ({ checkoutReducer }) => checkoutReducer.sameAsBilling;

const billingErrors = ({ checkoutReducer }) => checkoutReducer.billingErrors;
const shippingErrors = ({ checkoutReducer }) => checkoutReducer.shippingErrors;

export {
  paymentMethods,
  shippingMethods,
  receipt,
  billingInfo,
  shippingInfo,
  sameAsBilling,
  billingErrors,
  shippingErrors,
};
