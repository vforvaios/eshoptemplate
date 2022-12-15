import { createAction } from '@reduxjs/toolkit';

const getStaticContent = createAction('alert/getStaticContent');
const setStaticContent = createAction('alert/setStaticContent');
const setStaticPagesInMenu = createAction('alert/setStaticPagesInMenu');

export { getStaticContent, setStaticContent, setStaticPagesInMenu };
