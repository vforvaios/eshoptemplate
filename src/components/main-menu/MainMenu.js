import React from 'react';

import CloseIcon from '@material-ui/icons/Close';

const MainMenu = ({ setToggleValue }) => (
  <div>
    <CloseIcon onClick={setToggleValue('left', false)} />
    <div>Κατηγορίες</div>
    <ul>
      <li>Κατηγορία-1</li>
      <li>Κατηγορία-2</li>
    </ul>
  </div>
);

export default MainMenu;
