import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

import styles from './styles';

const Header = ({ classes }) => (
  <Grid container className={classes?.headerContainer}>
    <Grid item>
      <MenuIcon />
    </Grid>
    <Grid item>LOGO</Grid>
    <Grid item>Search area</Grid>
  </Grid>
);

export default withStyles(styles)(Header);
