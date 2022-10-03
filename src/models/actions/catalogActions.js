import { createAction } from '@reduxjs/toolkit';

const getProductDetails = createAction('catalog/getProductDetails');
const getRelatedProducts = createAction('catalog/getRelatedProducts');
const setProductPage = createAction('catalog/setProductPage');
const setRelatedProducts = createAction('catalog/setRelatedProducts');
const getFilterCategories = createAction('catalog/getFilterCategories');
const setFilterCategories = createAction('catalog/setFilterCategories');
const setSelectedFilter = createAction('catalog/setSelectedFilter');
const setCatalogProducts = createAction('catalog/setCatalogProducts');
const getInitialCatalog = createAction('catalog/getInitialCatalog');
const setCatalogLoading = createAction('catalog/setCatalogLoading');
const removeSelectedFilter = createAction('catalog/removeSelectedFilter');
const getFilterSubCategories = createAction('catalog/getFilterSubCategories');
const setFilterSubCategories = createAction('catalog/setFilterSubCategories');

export {
  getProductDetails,
  setProductPage,
  getRelatedProducts,
  setRelatedProducts,
  getFilterCategories,
  setFilterCategories,
  setSelectedFilter,
  setCatalogProducts,
  getInitialCatalog,
  setCatalogLoading,
  removeSelectedFilter,
  getFilterSubCategories,
  setFilterSubCategories,
};
