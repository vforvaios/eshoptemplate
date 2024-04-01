import Product from 'components/product/Product';
import { useState } from 'react';

const RelevantProducts = ({ title, products, expandable }) => {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className="relevant-products">
      <h2
        className={`section-title-small ${expandable ? 'withCursor' : ''}`}
        onClick={() => {
          if (expandable) {
            setProductsOpen(!productsOpen);
          } else {
            return false;
          }
        }}>
        {!expandable ? title : `${title} ${!productsOpen ? '+' : '-'}`}
      </h2>

      <div
        className={`products ${!productsOpen && expandable ? 'hidden' : ''}`}>
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
