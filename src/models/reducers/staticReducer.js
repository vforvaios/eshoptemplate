import { createReducer } from '@reduxjs/toolkit';
import {
  setStaticContent,
  setStaticPagesInMenu,
  setKeyWords,
  setBusinessDetails,
  setSocialLinks,
} from 'models/actions/staticActions';

const initialState = {
  keywords: '',
  pages: [],
  staticPagesInMenu: [],
  sociallinks: [],
  businessdetails: {},
};
const staticReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setKeyWords, (state, action) => ({
      ...state,
      keywords: action.payload,
    }))
    .addCase(setStaticContent, (state, action) => ({
      ...state,
      pages: action.payload,
    }))
    .addCase(setSocialLinks, (state, action) => ({
      ...state,
      sociallinks: action.payload,
    }))
    .addCase(setBusinessDetails, (state, action) => ({
      ...state,
      businessdetails: action.payload?.[0],
    }))
    .addCase(setStaticPagesInMenu, (state, action) => ({
      ...state,
      staticPagesInMenu: action.payload,
    }));
});

export default staticReducer;
