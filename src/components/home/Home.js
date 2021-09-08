import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';
import './home.scss';

const Home = ({ classes }) => (
  <div className="homeBG">
    <span className={classes?.homeFontColor}>Home</span>
  </div>
);

export default withStyles(styles)(Home);
