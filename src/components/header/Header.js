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

const Header = ({ toggleValue, setToggleValue }) => {
  const userToken = useSelector(token);

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
