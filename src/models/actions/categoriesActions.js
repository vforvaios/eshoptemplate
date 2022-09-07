import { createAction } from '@reduxjs/toolkit';

const getCategories = createAction('categories/getCategories');
const setCategories = createAction('categories/setCategories');

export { getCategories, setCategories };
