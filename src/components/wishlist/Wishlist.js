import Product from 'components/product/Product';
import { toggleLoader } from 'models/actions/loaderActions';
import { getWishlist } from 'models/actions/wishlistActions';
import { wishlistProducts } from 'models/selectors/wishlistSelectors';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Wishlist = () => {
  const products = useSelector(wishlistProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleLoader(true));
    dispatch(getWishlist());
  }, []);

  return (
    <div className="content wishlist">
      <div className="row">
        <div className="wrapper">
          <div className="text-center">
            <h1 className="page-title">ΑΓΑΠΗΜΕΝΑ</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="grid-container catalog-container">
            {products?.length > 0 ? (
              <div className="products">
                <ul className="products-grid">
                  {products?.map((product) => (
                    <li key={product.productId}>
                      <Product isWishlist product={product} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="products">
                <h3 className="no-products">
                  Δεν έχετε αγαπημένα προϊόντα στη λίστα!
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
