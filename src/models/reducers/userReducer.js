import { createReducer } from '@reduxjs/toolkit';
import {
  setLoggedInUser,
  setMyOrders,
  setOrderStatuses,
  setOrderId,
  setOrderDetails,
} from 'models/actions/userActions';

const initialState = {
  user: {},
  myOrders: {
    pagination: {
      total: 0,
      currentPage: 1,
      perPage: process.env.REACT_APP_PER_PAGE,
    },
    results: [],
  },
  statuses: [],
  orderId: '',
  orderDetails: {},
};

const userReducer = createReducer(initialState, {
  [setLoggedInUser.type]: (state, action) => ({
    ...state,
    user: action.payload,
  }),
  [setOrderDetails.type]: (state, action) => ({
    ...state,
    orderDetails: action.payload,
  }),
  [setMyOrders.type]: (state, action) => ({
    ...state,
    myOrders: {
      ...state?.myOrders,
      pagination: {
        ...state?.myOrders.pagination,
        currentPage: 1,
        total: action.payload.total,
      },
      results: action.payload.results,
    },
  }),
  [setOrderStatuses.type]: (state, action) => ({
    ...state,
    statuses: action.payload,
  }),
  [setOrderId.type]: (state, action) => ({
    ...state,
    orderId: action.payload,
  }),
});

export default userReducer;
