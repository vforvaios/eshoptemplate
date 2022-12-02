/* eslint-disable max-len */
import { createReducer } from '@reduxjs/toolkit';
import { setHomePageData } from 'models/actions/homeActions';

const initialState = {
  homeSlider: [],
  offers: {
    results: [],
  },
};
const homeReducer = createReducer(initialState, {
  [setHomePageData.type]: (state, action) => ({
    ...state,
    offers: {
      ...state.offers,
      results: action.payload.tabsOffers,
    },
  }),
});

export default homeReducer;
