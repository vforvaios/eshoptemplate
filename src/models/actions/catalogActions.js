import { createAction } from '@reduxjs/toolkit';

const getProductDetails = createAction('catalog/getProductDetails');
const setProductPage = createAction('catalog/setProductPage');

export { getProductDetails, setProductPage };
