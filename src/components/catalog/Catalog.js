import React from 'react';

import Product from 'components/product/Product';

const arr = [1, 2, 3, 4, 5];

const Catalog = () => (
  <div className="row catalog content">
    <div className="wrapper">
      <div className="grid-container">
        <section className="col-left filters">Filters</section>
        <section className="col-right products-section">
          <ul className="products-grid">
            {arr.map((index) => (
              <li key={index}>
                <Product id={index} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default Catalog;
