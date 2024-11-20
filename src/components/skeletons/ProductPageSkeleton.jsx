import React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

const ProductPageSkeleton = () => {
  return (
    <div className="row">
      <div className="wrapper">
        <Grid container>
          <Grid item sm={6} xs={12} className="mainProductPhotosContainer">
            <Skeleton variant="rectangular" width={'100%'} height={300} />
          </Grid>
          <Grid item sm={6} xs={12} className="pr0 mainProductRightSection">
            <Skeleton variant="rectangular" width={'100%'} height={300} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProductPageSkeleton;
