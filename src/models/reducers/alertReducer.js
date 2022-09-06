import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  message: 'Alert',
  show: false,
  type: 'success',
};
const alertReducer = createReducer(initialState, {
  // [setLoggedInUser.type]: (state, action) => ({
  //   ...state,
  //   user: action.payload,
  // }),
});

export default alertReducer;
