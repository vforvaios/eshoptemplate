/* eslint-disable max-len */
import { createReducer } from '@reduxjs/toolkit';
import { setHomePageData, setLogo } from 'models/actions/homeActions';

const initialState = {
  logo: {},
  homeSlider: [],
  offers: {
    results: [],
  },
  sections: {
    results: [],
  },
  banners: {
    results: [],
  },
};
const homeReducer = createReducer(initialState, {
  [setLogo.type]: (state, action) => ({
    ...state,
    logo: action.payload,
  }),
  [setHomePageData.type]: (state, action) => ({
    ...state,
    offers: {
      ...state.offers,
      results: action.payload.tabsOffers,
    },
    sections: {
      ...state.offers,
      results: action.payload?.sections,
    },
    banners: {
      ...state.offers,
      results: action.payload?.banners,
    },
  }),
});

export default homeReducer;
