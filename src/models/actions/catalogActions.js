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
const getPricesRange = createAction('catalog/getPricesRange');
const setInitialPricesRange = createAction('catalog/setInitialPricesRange');
const getCatalogWithPrices = createAction('catalog/getCatalogWithPrices');
const setSelectedFilterPriceRange = createAction(
  'catalog/setSelectedFilterPriceRange',
);
const setCatalogSorting = createAction('catalog/setCatalogSorting');
const setCurrentCatalogPage = createAction('catalog/setCurrentCatalogPage');

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
  getPricesRange,
  setInitialPricesRange,
  getCatalogWithPrices,
  setSelectedFilterPriceRange,
  setCatalogSorting,
  setCurrentCatalogPage,
};
