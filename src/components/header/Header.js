/* eslint-disable react-hooks/exhaustive-deps */
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import MiniCart from 'components/cart/MiniCart';
import MainMenu from 'components/main-menu/MainMenu';
import UserMenu from 'components/usermenu/UserMenu';
import { withToggle } from 'library';
import { getLogo } from 'models/actions/homeActions';
import { logo } from 'models/selectors/homeSelectors';
import { token } from 'models/selectors/userSelector';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ toggleValue, setToggleValue }) => {
  const dispatch = useDispatch();
  const userToken = useSelector(token);
  const logoImage = useSelector(logo);

  useEffect(() => {
    dispatch(getLogo());
  }, []);

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
          <img
            src={logoImage?.preview}
            alt={logoImage?.data?.name}
            className="logo-image"
          />
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
