import Product from 'components/product/Product';
import React, { useState } from 'react';
import Slider from 'react-slick';

const RelevantProducts = ({ title, products }) => {
  const [productsOpen, setProductsOpen] = useState(false);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="relevant-products">
      <h2 className="section-title-small withCursor" onClick={() => setProductsOpen(!productsOpen)}>{title} {!productsOpen ? '+' : '-'}</h2>
      <div className="row">
        <div className="wrapper small">
          <div className={`products ${!productsOpen ? 'hidden' : ''}`}>
            <ul className="products-grid">
              <Slider {...settings}>
                {products?.map((product) => (
                  <li key={product.productId}>
                    <Product product={product} />
                  </li>
                ))}
              </Slider>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelevantProducts;
