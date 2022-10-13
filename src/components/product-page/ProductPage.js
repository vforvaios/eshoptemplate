/* eslint-disable react-hooks/exhaustive-deps */
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RelevantProducts from 'components/relevant-products/RelevantProducts';
import getPercentage from 'library/getPercentage';
import { addToCart } from 'models/actions/cartActions';
import {
  getProductDetails,
  getRelatedProducts,
} from 'models/actions/catalogActions';
import { addProductWishlist } from 'models/actions/wishlistActions';
import {
  singleProduct,
  relatedProducts,
} from 'models/selectors/catalogSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductMoreDetails from './ProductMoreDetails';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(singleProduct);
  const relProducts = useSelector(relatedProducts);
  const {
    productTitle,
    productDescription,
    initialPrice,
    price,
    imgHref,
    code,
    tabs,
  } = product;

  useEffect(() => {
    dispatch(getProductDetails(id));
    dispatch(getRelatedProducts(id));
  }, [id]);

  return (
    <div className="productPage content">
      <div className="row">
        <div className="wrapper">
          <Grid container>
            <Grid item sm={6} xs={12} className="mainProductPhotosContainer">
              <img
                src={imgHref}
                alt="Chris standing up holding his daughter Elva"
              />
            </Grid>
            <Grid item sm={6} xs={12} className="pr0">
              <div className="product-title">
                <h1 className="headerTitle">{productTitle}</h1>
              </div>
              <Typography
                variant="body2"
                component="p"
                className="product-code">
                <span>Κωδικός: {code}</span>
              </Typography>
              <div className="price-container">
                <div>
                  <span>{initialPrice}€</span>
                  {price}€
                </div>
                <span className="discount">
                  {getPercentage(initialPrice, price)}%
                </span>
              </div>
              <Typography
                className="product-description"
                component="p"
                variant="body1">
                {productDescription}
              </Typography>
              <div className="product-page-actions">
                <button
                  className="add-to-cart"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(addToCart(product));
                  }}>
                  ΑΓΟΡΑ
                </button>
                <IconButton
                  className="product-action"
                  aria-label="add to favorites"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(addProductWishlist(id));
                  }}>
                  <FavoriteBorderIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      {tabs && (
        <div className="row">
          <div className="wrapper">
            <ProductMoreDetails tabs={tabs} />
          </div>
        </div>
      )}
      <div className="row">
        <div className="wrapper">
          <RelevantProducts title="ΣΧΕΤΙΚΑ ΠΡΟΪΟΝΤΑ" products={relProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
