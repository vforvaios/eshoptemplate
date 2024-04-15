import { createAction } from '@reduxjs/toolkit';

const getStaticContent = createAction('staticContentPages/getStaticContent');
const setStaticContent = createAction('staticContentPages/setStaticContent');
const setStaticPagesInMenu = createAction(
  'staticContentPages/setStaticPagesInMenu',
);
const getKeyWords = createAction('staticContentPages/getKeyWords');
const setKeyWords = createAction('staticContentPages/setKeyWords');
const setBusinessDetails = createAction(
  'staticContentPages/setBusinessDetails',
);
const getBusinessDetails = createAction(
  'staticContentPages/getBusinessDetails',
);
const setSocialLinks = createAction('staticContentPages/setSocialLinks');
const getSocialLinks = createAction('staticContentPages/getSocialLinks');

export {
  getStaticContent,
  setStaticContent,
  setStaticPagesInMenu,
  getKeyWords,
  setKeyWords,
  getBusinessDetails,
  setBusinessDetails,
  setSocialLinks,
  getSocialLinks,
};
