import { createAction } from '@reduxjs/toolkit';

const loginUser = createAction('user/loginUser');
const logoutUser = createAction('user/logoutUser');
const registerUser = createAction('user/registerUser');

const setLoggedInUser = createAction('user/setLoggedInUser');
const addNewsletterUser = createAction('user/addNewsletterUser');
const getMyOrders = createAction('user/getMyOrders');
const setMyOrders = createAction('user/setMyOrders');

export {
  setLoggedInUser,
  loginUser,
  logoutUser,
  registerUser,
  addNewsletterUser,
  getMyOrders,
  setMyOrders,
};
