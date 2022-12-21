import { createReducer } from '@reduxjs/toolkit';
import {
  setPaymentMethods,
  setShippingMethods,
  setBillingInfo,
  setShippingInfo,
  setReceipt,
  setSameAsBilling,
  clearOrder,
  setCheckoutError,
  setOrderOk,
  setCanSeeSuccessPage,
  setUpdatedProducts,
  setCountries,
  setPrefectures,
  changedPrefecture,
} from 'models/actions/checkoutActions';

const initialState = {
  updatedProducts: false,
  billingErrors: [],
  shippingErrors: [],
  paymentMethods: [],
  shippingMethods: [],
  countries: [],
  prefectureIsChanged: false,
  billingInfo: {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    mobile: '',
    address: '',
    postCode: '',
    city: '',
    region: '',
    country: 81,
    prefecture: 1,
    prefectures: [],
  },
  shippingInfo: {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    mobile: '',
    address: '',
    postCode: '',
    city: '',
    region: '',
    country: 81,
    prefecture: 1,
    prefectures: [],
  },
  receipt: 'receipt',
  sameAsBilling: true,
  orderOK: false,
  canSeeSuccessPage: false,
};

const checkoutReducer = createReducer(initialState, {
  [changedPrefecture.type]: (state, action) => ({
    ...state,
    prefectureIsChanged: action.payload,
  }),
  [setPrefectures.type]: (state, action) => ({
    ...state,
    [action.payload?.info]: {
      ...state?.[action?.payload?.info],
      prefectures: action?.payload?.prefectures,
      prefecture: action?.payload?.prefectures?.[0]?.id,
    },
  }),
  [setCountries.type]: (state, action) => ({
    ...state,
    countries: action.payload,
  }),
  [setUpdatedProducts.type]: (state, action) => ({
    ...state,
    updatedProducts: action.payload,
  }),
  [setPaymentMethods.type]: (state, action) => ({
    ...state,
    paymentMethods: action.payload,
  }),
  [setShippingMethods.type]: (state, action) => ({
    ...state,
    shippingMethods: action.payload,
  }),
  [setReceipt.type]: (state, action) => ({
    ...state,
    receipt: action.payload,
  }),
  [setSameAsBilling.type]: (state, action) => ({
    ...state,
    sameAsBilling: action.payload,
  }),
  [setBillingInfo.type]: (state, action) => ({
    ...state,
    billingInfo: {
      ...state?.billingInfo,
      [action.payload.key]: action.payload.name,
    },
    prefectureIsChanged: false,
  }),
  [setShippingInfo.type]: (state, action) => ({
    ...state,
    shippingInfo: {
      ...state?.shippingInfo,
      [action.payload.key]: action.payload.name,
    },
    prefectureIsChanged: false,
  }),
  [clearOrder.type]: (state) => ({
    ...initialState,
  }),
  [setCheckoutError.type]: (state, action) => ({
    ...state,
    billingErrors: action.payload.billingErrors,
    shippingErrors: action.payload.shippingErrors,
  }),
  [setOrderOk.type]: (state, action) => ({
    ...state,
    orderOK: true,
  }),
  [setCanSeeSuccessPage.type]: (state, action) => ({
    ...state,
    canSeeSuccessPage: true,
  }),
});

export default checkoutReducer;
