import { createReducer } from '@reduxjs/toolkit';
import { setStaticContent } from 'models/actions/staticActions';

const initialState = {
  pages: [],
};
const staticReducer = createReducer(initialState, {
  [setStaticContent.type]: (state, action) => ({
    ...state,
    pages: action.payload,
  }),
});

export default staticReducer;
