import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';

import HomeOffersTabs from './home-offer-tabs/HomeOffersTabs';
import HomeSlider from './home-slider/HomeSlider';
import styles from './styles';
import './home.scss';

const Home = () => (
  <div className="homeBG">
    <div className="row">
      <HomeSlider />
    </div>
    <div className="row">
      <div className="wrapper">
        <HomeOffersTabs />
      </div>
    </div>
  </div>
);

export default withStyles(styles)(Home);
