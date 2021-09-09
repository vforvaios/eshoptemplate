import React from 'react';
import { compose } from 'redux';
import withStyles from '@material-ui/core/styles/withStyles';
import MainMenu from 'components/main-menu/MainMenu';

import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import { withToggle } from 'library';

import styles from './styles';

const Header = ({ classes, toggleValue, setToggleValue }) => (
  <Grid container className={classes?.headerContainer}>
    <Grid item>
      <MenuIcon onClick={setToggleValue('left', true)} className={classes?.menuIcon} />
      <Drawer anchor="left" open={toggleValue?.left} onClose={setToggleValue('left', false)}>
        <MainMenu setToggleValue={setToggleValue} />
      </Drawer>
    </Grid>
    <Grid item>LOGO</Grid>
    <Grid item>Search area</Grid>
  </Grid>
);

export default compose(withToggle, withStyles(styles))(Header);