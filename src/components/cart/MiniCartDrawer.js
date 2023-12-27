import MyCart from 'components/cart/MyCart';
import { cart } from 'models/selectors/cartSelectors';
import React from 'react';
import { useSelector } from 'react-redux';

const MiniCartDrawer = ({ setToggleValue }) => {
  const myCart = useSelector(cart);

  return (
    <div className="mini-cart-drawer-wrapper">
      <MyCart cart={myCart} updateable />
    </div>
  );
};

export default MiniCartDrawer;
