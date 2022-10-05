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
      total: 0,
      currentPage: 1,
      perPage: process.env.REACT_APP_PER_PAGE,
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
    catalog: {
      ...state.catalog,
      pagination: {
        ...state.catalog.pagination,
        currentPage: 1,
        total: 0,
      },
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
    catalog: {
      ...state.catalog,
      pagination: {
        ...state.catalog.pagination,
        currentPage: 1,
        total: 0,
      },
    },
  }),
  [setCatalogProducts.type]: (state, action) => ({
    ...state,
    catalog: {
      ...state.catalog,
      results: action.payload.results,
      pagination: {
        ...state.catalog.pagination,
        total: action.payload.total,
      },
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
    catalog: {
      ...state.catalog,
      pagination: {
        ...state.catalog.pagination,
        currentPage: 1,
        total: 0,
      },
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
    catalog: {
      ...state.catalog,
      pagination: {
        ...state.catalog.pagination,
        currentPage: 1,
        total: 0,
      },
    },
  }),
});

export default catalogReducer;
