import { createAction } from '@reduxjs/toolkit';

const loginUser = createAction('user/loginUser');
const logoutUser = createAction('user/logoutUser');
const registerUser = createAction('user/registerUser');

const setLoggedInUser = createAction('user/setLoggedInUser');

export { setLoggedInUser, loginUser, logoutUser, registerUser };
