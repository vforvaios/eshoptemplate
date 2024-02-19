/*eslint max-len: ["error", { "code": 1080 }]*/
import Drawer from '@mui/material/Drawer';
import { withToggle } from 'library';
import { cart } from 'models/selectors/cartSelectors';
import React from 'react';
import { useSelector } from 'react-redux';

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
          <svg className="header-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" /></svg></i>
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
