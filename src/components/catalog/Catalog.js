import CatalogPagination from 'components/catalogPagination/CatalogPagination';
import Product from 'components/product/Product';
import SortingCatalog from 'components/sortingCatalog/SortingCatalog';
import {
  catalogProducts,
  catalogPagination,
} from 'models/selectors/catalogSelectors';
import React from 'react';
import { useSelector } from 'react-redux';

const Catalog = () => {
  const products = useSelector(catalogProducts);
  const pagination = useSelector(catalogPagination);

  return (
    <div className="row catalog content">
      <div className="wrapper">
        <div className="grid-container">
          <section className="col-left filters">Filters</section>
          <section className="col-right products-section">
            <div className="sorting-section">
              <CatalogPagination pagination={pagination} />
              <SortingCatalog />
            </div>
            <div className="products">
              <ul className="products-grid">
                {products?.map((product) => (
                  <li key={product.productId}>
                    <Product product={product} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="pagination">
              <CatalogPagination pagination={pagination} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
