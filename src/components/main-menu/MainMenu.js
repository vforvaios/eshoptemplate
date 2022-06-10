import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = ({ setToggleValue }) => (
  <div>
    <CloseIcon onClick={setToggleValue('left', false)} />
    <div>Menu</div>
    <ul>
      <li>
        <Link onClick={setToggleValue('left', false)} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link onClick={setToggleValue('left', false)} to="/about">
          About
        </Link>
      </li>
      <li>
        <Link onClick={setToggleValue('left', false)} to="/catalog">
          Catalog
        </Link>
      </li>
      <li>
        <Link onClick={setToggleValue('left', false)} to="/cart">
          Cart
        </Link>
      </li>
      <li>
        <Link onClick={setToggleValue('left', false)} to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
);

export default MainMenu;
