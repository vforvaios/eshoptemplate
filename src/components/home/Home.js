import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import HomeSlider from './home-slider/HomeSlider';

import styles from './styles';
import './home.scss';

const Home = ({ classes }) => {
  return (
    <div className="homeBG">
      <HomeSlider />

      <div className={classes?.homeFontColor}>Home</div>
    </div>
  );
};

export default withStyles(styles)(Home);
