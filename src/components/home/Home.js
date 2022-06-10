import withStyles from '@material-ui/core/styles/withStyles';
import { homeOffers } from 'models/selectors/homeSelectors';
import React from 'react';
import { useSelector } from 'react-redux';

import HomeOffersTabs from './home-offer-tabs/HomeOffersTabs';
import HomeSlider from './home-slider/HomeSlider';
import styles from './styles';

import './home.scss';

const Home = () => {
  const offers = useSelector(homeOffers);

  return (
    <div className="homeBG">
      <div className="row">
        <HomeSlider />
      </div>
      <div className="row">
        <div className="wrapper">
          <HomeOffersTabs offers={offers} />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
