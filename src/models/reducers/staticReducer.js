import { createReducer } from '@reduxjs/toolkit';
import {
  setStaticContent,
  setStaticPagesInMenu,
  setKeyWords,
} from 'models/actions/staticActions';

const initialState = {
  keywords: '',
  pages: [],
  staticPagesInMenu: [],
};
const staticReducer = createReducer(initialState, {
  [setKeyWords.type]: (state, action) => ({
    ...state,
    keywords: action.payload,
  }),
  [setStaticContent.type]: (state, action) => ({
    ...state,
    pages: action.payload,
  }),
  [setStaticPagesInMenu.type]: (state, action) => ({
    ...state,
    staticPagesInMenu: action.payload,
  }),
});

export default staticReducer;
