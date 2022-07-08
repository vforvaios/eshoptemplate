import { createAction } from '@reduxjs/toolkit';

const loginUser = createAction('user/loginUser');

const setLoggedInUser = createAction('user/setLoggedInUser');

export { setLoggedInUser, loginUser };
