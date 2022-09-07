import { createAction } from '@reduxjs/toolkit';

const loginUser = createAction('user/loginUser');
const logoutUser = createAction('user/logoutUser');

const setLoggedInUser = createAction('user/setLoggedInUser');

export { setLoggedInUser, loginUser, logoutUser };
