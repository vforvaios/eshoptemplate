import { logoutUser } from 'models/actions/userActions';
import { user } from 'models/selectors/userSelector';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserMenu = ({ token }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(user);
  const [toggleUserMenu, setToggleUserMenu] = useState(false);

  return token ? (
    <div className="usermenu-container">
      <i
        className="icon-user-o"
        onClick={() => setToggleUserMenu(!toggleUserMenu)}
      />
      <ul className={`usermenu-list ${toggleUserMenu ? 'show' : ''}`}>
        <li className="userLoggedIn">
          Καλωσήρθες {loggedInUser?.userLoggedIn?.username}
        </li>
        <li onClick={() => setToggleUserMenu(!toggleUserMenu)}>
          <Link to="/wishlist">Τα αγαπημένα μου</Link>
        </li>
        <li>Οι παραγγελίες μου</li>
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
