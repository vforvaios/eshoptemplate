import React from 'react';
import Grid from '@material-ui/core/Grid';

import './productPage.scss';

const ProductPage = () => (
  <div className="productPage">
    <div className="row">
      <div className="wrapper">
        <Grid container>
          <Grid item xs={6} className="mainProductPhotosContainer">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="https://via.placeholder.com/400x400"
              />
              <img
                src="https://via.placeholder.com/800x800"
                alt="Chris standing up holding his daughter Elva"
              />
            </picture>
          </Grid>
          <Grid item xs={6}>
            Main Product Content
          </Grid>
        </Grid>
      </div>
    </div>
  </div>
);

export default ProductPage;
