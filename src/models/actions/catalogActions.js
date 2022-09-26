import { createAction } from '@reduxjs/toolkit';

const getProductDetails = createAction('catalog/getProductDetails');
const getRelatedProducts = createAction('catalog/getRelatedProducts');
const setProductPage = createAction('catalog/setProductPage');
const setRelatedProducts = createAction('catalog/setRelatedProducts');

export {
  getProductDetails,
  setProductPage,
  getRelatedProducts,
  setRelatedProducts,
};
