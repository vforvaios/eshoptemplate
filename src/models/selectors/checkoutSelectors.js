const paymentMethods = ({ checkoutReducer }) => checkoutReducer?.paymentMethods;

const shippingMethods = ({ checkoutReducer }) =>
  checkoutReducer?.shippingMethods;

const receipt = ({ checkoutReducer }) => checkoutReducer.receipt;

const billingInfo = ({ checkoutReducer }) => checkoutReducer.billingInfo;

const shippingInfo = ({ checkoutReducer }) => checkoutReducer.shippingInfo;

const sameAsBilling = ({ checkoutReducer }) => checkoutReducer.sameAsBilling;

const billingErrors = ({ checkoutReducer }) => checkoutReducer.billingErrors;
const shippingErrors = ({ checkoutReducer }) => checkoutReducer.shippingErrors;
const orderOK = ({ checkoutReducer }) => checkoutReducer.orderOK;
const canSeeSuccessPage = ({ checkoutReducer }) =>
  checkoutReducer.canSeeSuccessPage;

export {
  paymentMethods,
  shippingMethods,
  receipt,
  billingInfo,
  shippingInfo,
  sameAsBilling,
  billingErrors,
  shippingErrors,
  orderOK,
  canSeeSuccessPage,
};
