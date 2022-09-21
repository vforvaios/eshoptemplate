import { createAction } from '@reduxjs/toolkit';

const getHomePageData = createAction('home/getHomePageData');
const setHomePageData = createAction('home/setHomePageData');

export { getHomePageData, setHomePageData };
