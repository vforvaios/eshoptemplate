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
  setInitialPricesRange,
  setSelectedFilterPriceRange,
  setCatalogSorting,
} from 'models/actions/catalogActions';

const initialState = {
  relatedProducts: [],
  singleProduct: {},
  filterCategories: [],
  filterSubCategories: [],
  filterPricesRange: {},
  sorting: 1, // price asc, then price desc equals 2
  filters: {
    selectedCategory: null,
    selectedSubCategory: null,
    selectedPriceRange: [],
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
  // THIS IS DOUBLED AS THE ABOVE ONLY
  // BECAUSE I DONT WANT TO TRIGGER THE EPIC
  // EVERY TIME I CHANGE THE PRICE SLIDER
  [setSelectedFilterPriceRange.type]: (state, action) => ({
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
  [setInitialPricesRange.type]: (state, action) => ({
    ...state,
    filterPricesRange: action.payload,
  }),
  [setCatalogSorting.type]: (state, action) => ({
    ...state,
    sorting: action.payload,
  }),
});

export default catalogReducer;
