const paymentMethods = ({ checkoutReducer }) => checkoutReducer?.paymentMethods;

const shippingMethods = ({ checkoutReducer }) =>
  checkoutReducer?.shippingMethods;

const receipt = ({ checkoutReducer }) => checkoutReducer.receipt;

const billingInfo = ({ checkoutReducer }) => checkoutReducer.billingInfo;

const shippingInfo = ({ checkoutReducer }) => checkoutReducer.shippingInfo;

const sameAsBilling = ({ checkoutReducer }) => checkoutReducer.sameAsBilling;

export {
  paymentMethods,
  shippingMethods,
  receipt,
  billingInfo,
  shippingInfo,
  sameAsBilling,
};
