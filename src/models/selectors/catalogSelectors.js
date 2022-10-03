const catalogProducts = ({ catalogReducer }) => catalogReducer.catalog.results;
const catalogPagination = ({ catalogReducer }) =>
  catalogReducer.catalog.pagination;
const singleProduct = ({ catalogReducer }) => catalogReducer.singleProduct;
const relatedProducts = ({ catalogReducer }) => catalogReducer.relatedProducts;
const filters = ({ catalogReducer }) => catalogReducer.filters;
const filterCategories = ({ catalogReducer }) =>
  catalogReducer.filterCategories;

export {
  catalogProducts,
  catalogPagination,
  singleProduct,
  relatedProducts,
  filterCategories,
  filters,
};
