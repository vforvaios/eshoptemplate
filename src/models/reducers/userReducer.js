import { createReducer } from '@reduxjs/toolkit';
import { setLoggedInUser } from 'models/actions/userActions';

const initialState = {
  user: {},
};
const userReducer = createReducer(initialState, {
  [setLoggedInUser.type]: (state, action) => ({
    ...state,
    user: action.payload,
  }),
});

export default userReducer;
