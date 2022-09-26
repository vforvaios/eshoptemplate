/* eslint-disable react-hooks/exhaustive-deps */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import getPercentage from 'library/getPercentage';
import { addToCart } from 'models/actions/cartActions';
import { getProductDetails } from 'models/actions/catalogActions';
import { singleProduct } from 'models/selectors/catalogSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductMoreDetails from './ProductMoreDetails';

import './productPage.scss';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(singleProduct);
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
  }, []);

  return (
    <div className="productPage content">
      <div className="row">
        <div className="wrapper">
          <Grid container>
            <Grid item xs={6} className="mainProductPhotosContainer">
              <img
                src={imgHref}
                alt="Chris standing up holding his daughter Elva"
              />
            </Grid>
            <Grid item xs={6} className="pr0">
              <div className="product-title">
                <h1>{productTitle}</h1>
                <span className="discount">
                  {getPercentage(initialPrice, price)}%
                </span>
              </div>
              <div className="price-container">
                <Typography
                  variant="body2"
                  component="p"
                  className="product-code">
                  <span>{code}</span>
                </Typography>
                <div>
                  <span>{initialPrice}€</span>
                  {price}€
                </div>
              </div>
              <Typography component="p" variant="body1">
                {productDescription}
              </Typography>
              <div className="product-page-actions">
                <button
                  className="add-to-cart"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(addToCart(product));
                  }}>
                  ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ
                </button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <ProductMoreDetails tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
