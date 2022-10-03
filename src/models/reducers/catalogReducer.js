/* eslint-disable max-len */
import { createReducer } from '@reduxjs/toolkit';
import {
  setProductPage,
  setRelatedProducts,
  setFilterCategories,
  setSelectedFilter,
  setCatalogProducts,
  setCatalogLoading,
  removeSelectedFilter,
  setFilterSubCategories,
} from 'models/actions/catalogActions';

const initialState = {
  relatedProducts: [],
  singleProduct: {},
  filterCategories: [],
  filterSubCategories: [],
  filters: {
    selectedCategory: null,
    selectedSubCategory: null,
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
  loading: false,
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
  [setSelectedFilter.type]: (state, action) => ({
    ...state,
    filters: {
      ...state.filters,
      [action.payload.type]: action.payload.value,
    },
  }),
  [setCatalogProducts.type]: (state, action) => ({
    ...state,
    catalog: {
      ...state.catalog,
      results: action.payload,
    },
  }),
  [setCatalogLoading.type]: (state, action) => ({
    ...state,
    loading: action.payload,
  }),
  [removeSelectedFilter.type]: (state, action) => ({
    ...state,
    filters: {
      ...state?.filters,
      [action.payload.type]: null,
    },
  }),
  [setFilterSubCategories.type]: (state, action) => ({
    ...state,
    filterSubCategories: action.payload,
  }),
});

export default catalogReducer;
