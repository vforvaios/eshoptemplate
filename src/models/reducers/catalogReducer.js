/* eslint-disable max-len */
import { createReducer } from '@reduxjs/toolkit';
import {
  setProductPage,
  setRelatedProducts,
  setFilterCategories,
  setSelectedCategoryFilter,
  setCatalogProducts,
} from 'models/actions/catalogActions';

const initialState = {
  relatedProducts: [],
  singleProduct: {},
  filterCategories: [],
  filters: {
    selectedCategory: null,
  },
  catalog: {
    pagination: {
      total: 20,
      currentPage: 2,
      perPage: 4,
      nextPage: 3,
    },
    results: [],
  },
};
const catalogReducer = createReducer(initialState, {
  [setProductPage.type]: (state, action) => ({
    ...state,
    singleProduct: action.payload,
  }),
  [setRelatedProducts.type]: (state, action) => ({
    ...state,
    relatedProducts: action.payload,
  }),
  [setFilterCategories.type]: (state, action) => ({
    ...state,
    filterCategories: action.payload,
  }),
  [setSelectedCategoryFilter.type]: (state, action) => ({
    ...state,
    filters: {
      ...state.filters,
      selectedCategory: action.payload.category,
    },
  }),
  [setCatalogProducts.type]: (state, action) => ({
    ...state,
    catalog: {
      ...state.catalog,
      results: action.payload,
    },
  }),
});

export default catalogReducer;
