import { createAction } from '@reduxjs/toolkit';

const getProductDetails = createAction('catalog/getProductDetails');
const getRelatedProducts = createAction('catalog/getRelatedProducts');
const setProductPage = createAction('catalog/setProductPage');
const setRelatedProducts = createAction('catalog/setRelatedProducts');
const getFilterCategories = createAction('catalog/getFilterCategories');
const setFilterCategories = createAction('catalog/setFilterCategories');
const setSelectedCategoryFilter = createAction(
  'catalog/setSelectedCategoryFilter',
);
const setCatalogProducts = createAction('catalog/setCatalogProducts');

export {
  getProductDetails,
  setProductPage,
  getRelatedProducts,
  setRelatedProducts,
  getFilterCategories,
  setFilterCategories,
  setSelectedCategoryFilter,
  setCatalogProducts,
};
