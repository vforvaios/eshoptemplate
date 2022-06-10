import CatalogPagination from 'components/catalogPagination/CatalogPagination';
import Product from 'components/product/Product';
import SortingCatalog from 'components/sortingCatalog/SortingCatalog';
import React from 'react';

const arr = [1, 2, 3, 4, 5];

const Catalog = () => (
  <div className="row catalog content">
    <div className="wrapper">
      <div className="grid-container">
        <section className="col-left filters">Filters</section>
        <section className="col-right products-section">
          <div className="sorting-section">
            <CatalogPagination />
            <SortingCatalog />
          </div>
          <div className="products">
            <ul className="products-grid">
              {arr.map((index) => (
                <li key={index}>
                  <Product id={index} />
                </li>
              ))}
            </ul>
          </div>
          <div className="pagination">
            <CatalogPagination />
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default Catalog;
