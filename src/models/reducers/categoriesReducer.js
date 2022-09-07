import { createReducer } from '@reduxjs/toolkit';
import { setCategories } from 'models/actions/categoriesActions';

const initialState = {
  categories: [],
};
const categoriesReducer = createReducer(initialState, {
  [setCategories.type]: (state, action) => ({
    ...state,
    categories: action.payload,
  }),
});

export default categoriesReducer;
