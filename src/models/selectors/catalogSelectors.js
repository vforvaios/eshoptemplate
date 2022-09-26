const catalogProducts = ({ catalogReducer }) => catalogReducer.catalog.results;
const catalogPagination = ({ catalogReducer }) =>
  catalogReducer.catalog.pagination;
const singleProduct = ({ catalogReducer }) => catalogReducer.singleProduct;
const relatedProducts = ({ catalogReducer }) => catalogReducer.relatedProducts;

export { catalogProducts, catalogPagination, singleProduct, relatedProducts };
