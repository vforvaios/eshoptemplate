import MiniCartItem from 'components/cartItem/MiniCartItem';
import { cart } from 'models/selectors/cartSelectors';
import React from 'react';
import { useSelector } from 'react-redux';

const MiniCartDrawer = ({ setToggleValue }) => {
  const myCart = useSelector(cart);

  return (
    <div className="mini-cart-drawer-wrapper">
      {myCart?.map((item, index) => (
        <MiniCartItem setToggleValue={setToggleValue} key={index} item={item} />
      ))}
    </div>
  );
};

export default MiniCartDrawer;
