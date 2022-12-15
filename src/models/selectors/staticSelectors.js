const pages = ({ staticReducer }) => staticReducer?.pages;
const staticPagesInMenu = ({ staticReducer }) =>
  staticReducer?.staticPagesInMenu;

export { pages, staticPagesInMenu };
