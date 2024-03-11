import Product from 'components/product/Product';
import React, { useState } from 'react';

const RelevantProducts = ({ title, products }) => {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className="relevant-products">
      <h2
        className="section-title-small withCursor"
        onClick={() => setProductsOpen(!productsOpen)}>
        {title} {!productsOpen ? '+' : '-'}
      </h2>

      <div className={`products ${!productsOpen ? 'hidden' : ''}`}>
        <ul className="products-grid">
          {products?.map((product) => (
            <li key={product.productId}>
              <Product product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RelevantProducts;
