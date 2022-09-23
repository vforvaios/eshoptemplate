/* eslint-disable react-hooks/exhaustive-deps */
import Grid from '@material-ui/core/Grid';
import { getProductDetails } from 'models/actions/catalogActions';
import { singleProduct } from 'models/selectors/catalogSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './productPage.scss';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(singleProduct);

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
                src={product.imgHref}
                alt="Chris standing up holding his daughter Elva"
              />
            </Grid>
            <Grid item xs={6}>
              {product?.productTitle}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
