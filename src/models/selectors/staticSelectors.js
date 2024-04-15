const pages = ({ staticReducer }) => staticReducer?.pages;
const socialLinks = ({ staticReducer }) => staticReducer?.sociallinks;
const businessdetails = ({ staticReducer }) => staticReducer?.businessdetails;
const keywords = ({ staticReducer }) => staticReducer?.keywords;
const staticPagesInMenu = ({ staticReducer }) =>
  staticReducer?.staticPagesInMenu;

export { pages, keywords, staticPagesInMenu, businessdetails, socialLinks };
