import { createReducer } from '@reduxjs/toolkit';
import {
  setStaticContent,
  setStaticPagesInMenu,
} from 'models/actions/staticActions';

const initialState = {
  pages: [],
  staticPagesInMenu: [],
};
const staticReducer = createReducer(initialState, {
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
