import { createReducer } from '@reduxjs/toolkit';
import { toggleLoader } from 'models/actions/loaderActions';

const initialState = {
  loading: false,
};
const loaderReducer = createReducer(initialState, {
  [toggleLoader.type]: (state, action) => ({
    ...state,
    loading: action.payload,
  }),
});

export default loaderReducer;
