import React from 'react';

import CloseIcon from '@material-ui/icons/Close';

import { Link } from 'react-router-dom';

const MainMenu = ({ setToggleValue }) => (
  <div>
    <CloseIcon onClick={setToggleValue('left', false)} />
    <div>Menu</div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/catalog">Catalog</Link>
      </li>
    </ul>
  </div>
);

export default MainMenu;
