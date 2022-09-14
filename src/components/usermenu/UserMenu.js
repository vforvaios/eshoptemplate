import { logoutUser } from 'models/actions/userActions';
import React from 'react';
import { useDispatch } from 'react-redux';

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="usermenu-container">
      <button onClick={() => dispatch(logoutUser())}>ΕΞΟΔΟΣ</button>
    </div>
  );
};

export default UserMenu;
