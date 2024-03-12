/*eslint max-len: ["error", { "code": 1080 }]*/
import Drawer from '@mui/material/Drawer';
import { withToggle } from 'library';
import { cart } from 'models/selectors/cartSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import spritesvg from 'sprite.svg';

import MiniCartDrawer from './MiniCartDrawer';

const MiniCart = ({ toggleValue, setToggleValue }) => {
  const itemsLength = useSelector(cart)?.reduce((acc, curr) => {
    acc = Number(acc) + Number(curr?.total);

    return acc;
  }, 0);

  return (
    <>
      <button className="mini-cart" onClick={setToggleValue('right', true)}>
        <i>
          <svg className="header-icon">
            <use href={`${spritesvg}#cart`}></use>
          </svg>
        </i>
        <span>{itemsLength}</span>
      </button>
      <Drawer
        sx={{
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: 340,
            backgroundColor: '#fff!important',
          },
        }}
        anchor="right"
        open={toggleValue?.right}
        onClose={setToggleValue('right', false)}>
        <MiniCartDrawer
          itemsLength={itemsLength}
          setToggleValue={setToggleValue}
        />
      </Drawer>
    </>
  );
};

export default withToggle(MiniCart);
