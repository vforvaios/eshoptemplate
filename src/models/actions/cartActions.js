import { createAction } from '@reduxjs/toolkit';

const getCart = createAction('alert/getCart');
const setCart = createAction('alert/setCart');
const updateCartItemTotal = createAction('alert/updateCartItemTotal');

export { getCart, setCart, updateCartItemTotal };
