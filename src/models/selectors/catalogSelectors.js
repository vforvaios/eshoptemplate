const catalogProducts = ({ catalogReducer }) => catalogReducer.catalog.results;
const catalogPagination = ({ catalogReducer }) =>
  catalogReducer.catalog.pagination;

export { catalogProducts, catalogPagination };
