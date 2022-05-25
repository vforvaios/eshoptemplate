import { createReducer } from '@reduxjs/toolkit';
import { increaseCounterAction } from 'models/actions';

const initialState = {
  counter: 0,
  message: '',
  users: [],
  todos: [],
};
const counterReducer = createReducer(initialState, {
  [increaseCounterAction.type]: (state, action) => ({
    ...state,
    counter: state?.counter + action.payload,
  }),
});

export default counterReducer;
