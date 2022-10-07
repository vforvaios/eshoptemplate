import { logoutUser } from 'models/actions/userActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const UserMenu = ({ token }) => {
  const dispatch = useDispatch();
  const [toggleUserMenu, setToggleUserMenu] = useState(false);

  return token ? (
    <div className="usermenu-container">
      <i
        className="icon-user-o"
        onClick={() => setToggleUserMenu(!toggleUserMenu)}
      />
      <ul className={`usermenu-list ${toggleUserMenu ? 'show' : ''}`}>
        <li onClick={() => dispatch(logoutUser())}>Εξοδος</li>
      </ul>
    </div>
  ) : (
    <Link to="/login" className="user-icon">
      <i className="icon-user-o" />
    </Link>
  );
};

export default UserMenu;
