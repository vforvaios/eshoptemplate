import { createReducer } from '@reduxjs/toolkit';
import {
  setLoggedInUser,
  setMyOrders,
  setOrderStatuses,
} from 'models/actions/userActions';

const initialState = {
  user: {},
  myOrders: [],
  statuses: [],
};
const userReducer = createReducer(initialState, {
  [setLoggedInUser.type]: (state, action) => ({
    ...state,
    user: action.payload,
  }),
  [setMyOrders.type]: (state, action) => ({
    ...state,
    myOrders: action.payload,
  }),
  [setOrderStatuses.type]: (state, action) => ({
    ...state,
    statuses: action.payload,
  }),
});

export default userReducer;
