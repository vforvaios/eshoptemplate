import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { cart } from 'models/selectors/cartSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MiniCart = () => {
  const itemsLength = useSelector(cart)?.reduce((acc, curr) => {
    acc = acc + curr?.total;

    return acc;
  }, 0);

  return (
    <Link to="/cart" className="mini-cart">
      <ShoppingBasketIcon />
      <span>{itemsLength}</span>
    </Link>
  );
};

export default MiniCart;
