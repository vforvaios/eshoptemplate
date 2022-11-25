import { createAction } from '@reduxjs/toolkit';

const getStaticContent = createAction('alert/getStaticContent');
const setStaticContent = createAction('alert/setStaticContent');

export { getStaticContent, setStaticContent };
