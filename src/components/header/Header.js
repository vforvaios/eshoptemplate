import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import MenuIcon from '@material-ui/icons/Menu';
import MiniCart from 'components/cart/MiniCart';
import MainMenu from 'components/main-menu/MainMenu';
import Search from 'components/searchHeader/Search';
import { withToggle } from 'library';
import { getCart } from 'models/actions/cartActions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { compose } from 'redux';

import styles from './styles';

const Header = ({ classes, toggleValue, setToggleValue }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [location]);

  return (
    <Grid container className={classes?.headerContainer}>
      <Grid item>
        <MenuIcon
          onClick={setToggleValue('left', true)}
          className={classes?.menuIcon}
        />
        <Drawer
          anchor="left"
          open={toggleValue?.left}
          onClose={setToggleValue('left', false)}>
          <MainMenu setToggleValue={setToggleValue} />
        </Drawer>
      </Grid>
      <Grid item>LOGO</Grid>
      <Grid item>
        <div className={classes.headerActions}>
          <Search />
          <MiniCart />
        </div>
      </Grid>
    </Grid>
  );
};

export default compose(withToggle, withStyles(styles))(Header);
