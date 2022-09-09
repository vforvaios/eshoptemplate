import { createAction } from '@reduxjs/toolkit';

const getCart = createAction('alert/getCart');
const setCart = createAction('alert/setCart');
const addToCart = createAction('alert/addToCart');
const removeItemFromCart = createAction('alert/removeItemFromCart');
const updateCartItemTotal = createAction('alert/updateCartItemTotal');

export { getCart, setCart, addToCart, removeItemFromCart, updateCartItemTotal };
