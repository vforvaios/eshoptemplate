import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import MiniCart from 'components/cart/MiniCart';
import MainMenu from 'components/main-menu/MainMenu';
import Search from 'components/searchHeader/Search';
import UserMenu from 'components/usermenu/UserMenu';
import { withToggle } from 'library';
import { token } from 'models/selectors/userSelector';
import React from 'react';
import { useSelector } from 'react-redux';
import logo from 'resources/images/logo.jpg';

const Header = ({ toggleValue, setToggleValue }) => {
  const userToken = useSelector(token);

  return (
    <Grid container className="headerContainer">
      <Grid item sm={3}>
        <MenuIcon onClick={setToggleValue('left', true)} className="menuIcon" />
        <Drawer
          anchor="left"
          open={toggleValue?.left}
          onClose={setToggleValue('left', false)}>
          <MainMenu setToggleValue={setToggleValue} />
        </Drawer>
      </Grid>
      <Grid item sm={6} className="logo">
        <img src={logo} alt="fasdf" className="logo-image" />
      </Grid>
      <Grid item sm={3}>
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
