import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import MiniCart from 'components/cart/MiniCart';
import MainMenu from 'components/main-menu/MainMenu';
import UserMenu from 'components/usermenu/UserMenu';
import { withToggle } from 'library';
import { token } from 'models/selectors/userSelector';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <img src={logo} alt="fasdf" className="logo-image" />
        </Link>
      </Grid>
      <Grid item sm={3}>
        <div className="headerActions">
          <MiniCart />
          <UserMenu token={userToken} />
        </div>
      </Grid>
    </Grid>
  );
};

export default withToggle(Header);
