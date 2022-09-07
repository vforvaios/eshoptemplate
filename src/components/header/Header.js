import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import MiniCart from 'components/cart/MiniCart';
import MainMenu from 'components/main-menu/MainMenu';
import Search from 'components/searchHeader/Search';
import UserMenu from 'components/usermenu/UserMenu';
import { withToggle } from 'library';
import { getCart } from 'models/actions/cartActions';
import { token } from 'models/selectors/userSelector';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Header = ({ toggleValue, setToggleValue }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const userToken = useSelector(token);

  useEffect(() => {
    dispatch(getCart());
  }, [location]);

  return (
    <Grid container className="headerContainer">
      <Grid item>
        <MenuIcon onClick={setToggleValue('left', true)} className="menuIcon" />
        <Drawer
          anchor="left"
          open={toggleValue?.left}
          onClose={setToggleValue('left', false)}>
          <MainMenu setToggleValue={setToggleValue} />
        </Drawer>
      </Grid>
      <Grid item>LOGO</Grid>
      <Grid item>
        <div className="headerActions">
          <Search />
          <MiniCart />
          {userToken && <UserMenu />}
        </div>
      </Grid>
    </Grid>
  );
};

export default withToggle(Header);
