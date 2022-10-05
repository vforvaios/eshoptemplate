const catalogProducts = ({ catalogReducer }) => catalogReducer.catalog.results;
const catalogPagination = ({ catalogReducer }) =>
  catalogReducer.catalog.pagination;
const singleProduct = ({ catalogReducer }) => catalogReducer.singleProduct;
const relatedProducts = ({ catalogReducer }) => catalogReducer.relatedProducts;
const filters = ({ catalogReducer }) => catalogReducer.filters;
const catalogIsLoading = ({ catalogReducer }) => catalogReducer.loading;
const filterPricesRange = ({ catalogReducer }) =>
  catalogReducer.filterPricesRange;
const filterCategories = ({ catalogReducer }) =>
  catalogReducer.filterCategories;
const filterSubCategories = ({ catalogReducer }) =>
  catalogReducer.filterSubCategories;

const catalogSorting = ({ catalogReducer }) => catalogReducer.sorting;

export {
  catalogProducts,
  catalogPagination,
  singleProduct,
  relatedProducts,
  filterCategories,
  filters,
  catalogIsLoading,
  filterSubCategories,
  filterPricesRange,
  catalogSorting,
};
