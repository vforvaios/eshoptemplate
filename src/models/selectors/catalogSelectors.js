const catalogProducts = ({ catalogReducer }) => catalogReducer.catalog.results;
const catalogPagination = ({ catalogReducer }) =>
  catalogReducer.catalog.pagination;
const singleProduct = ({ catalogReducer }) => catalogReducer.singleProduct;
const relatedProducts = ({ catalogReducer }) => catalogReducer.relatedProducts;
const filters = ({ catalogReducer }) => catalogReducer.filters;
const catalogIsLoading = ({ catalogReducer }) => catalogReducer.loading;
const filterCategories = ({ catalogReducer }) =>
  catalogReducer.filterCategories;
const filterSubCategories = ({ catalogReducer }) =>
  catalogReducer.filterSubCategories;

export {
  catalogProducts,
  catalogPagination,
  singleProduct,
  relatedProducts,
  filterCategories,
  filters,
  catalogIsLoading,
  filterSubCategories,
};
