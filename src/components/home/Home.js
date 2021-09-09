import React from 'react';
import Grid from '@material-ui/core/Grid';

import withStyles from '@material-ui/core/styles/withStyles';
import HomeSlider from './home-slider/HomeSlider';
import HomeOffersTabs from './home-offer-tabs/HomeOffersTabs';

import styles from './styles';
import './home.scss';

const Home = ({ classes }) => (
  <div className="homeBG">
    <Grid container>
      <Grid item xs={12}>
        <HomeSlider />
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12}>
        <HomeOffersTabs />
      </Grid>
    </Grid>
    <div className={classes?.homeFontColor}>Home</div>
  </div>
);

export default withStyles(styles)(Home);
