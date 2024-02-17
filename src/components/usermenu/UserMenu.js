/* eslint-disable jsx-a11y/anchor-is-valid */
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { logoutUser } from 'models/actions/userActions';
import { user } from 'models/selectors/userSelector';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserMenu = ({ token }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(user);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return token ? (
    <div className="usermenu-container">
      <i onClick={handleClick}><img src={`${process.env.PUBLIC_URL}/user.svg`} /></i>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        keepMounted
        className="user-menu"
        TransitionComponent={Fade}>
        <MenuItem className="userLoggedIn">
          Welcome {loggedInUser?.userLoggedIn?.username}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/changepassword">Change password</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/wishlist">My favorites</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/orders">My orders</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a onClick={() => dispatch(logoutUser())}>Logout</a>
        </MenuItem>
      </Menu>
    </div>
  ) : (
    <Link to="/login" className="user-icon">
      <i><img src={`${process.env.PUBLIC_URL}/user.svg`} /></i>
    </Link>
  );
};

export default UserMenu;
