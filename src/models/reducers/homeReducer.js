/* eslint-disable max-len */
import { createReducer } from '@reduxjs/toolkit';
import {
  setHomePageData,
  setLogo,
  setEmptyHomePageSliders,
} from 'models/actions/homeActions';

const initialState = {
  offersTitle: '',
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
  lastBanner: {},
};
const homeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setEmptyHomePageSliders, (state, action) => ({
      ...state,
      banners: [],
    }))
    .addCase(setLogo, (state, action) => ({
      ...state,
      logo: action.payload,
    }))
    .addCase(setHomePageData, (state, action) => ({
      ...state,
      offersTitle: action.payload.offersTitle,
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
      lastBanner: action.payload?.lastBanner[0],
    }));
});

export default homeReducer;
