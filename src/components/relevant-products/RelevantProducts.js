import Product from 'components/product/Product';

const RelevantProducts = ({ title, products }) => {
  return (
    <div className="relevant-products">
      <h2 className="section-title-small">{title}</h2>

      <div className="products">
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
