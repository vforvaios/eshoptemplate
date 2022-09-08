import Button from '@material-ui/core/Button';
import MyCart from 'components/cart/MyCart';
import { cart } from 'models/selectors/cartSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const myCart = useSelector(cart);

  return (
    <div className="content cart-page">
      <div className="row">
        <div className="wrapper">
          <div className="page-title text-center">
            <h1>My Cart</h1>
            <div className="total-cart-items">
              {myCart?.length} items in cart
            </div>
          </div>
        </div>
      </div>
      {myCart?.length > 0 && (
        <>
          <div className="row">
            <div className="wrapper">
              <div className="actions separate">
                <Button className="button standard">
                  <Link to="/catalog">Back to catalog...</Link>
                </Button>
                <Button className="button green">Proceed to checkout...</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="wrapper">
              <MyCart cart={myCart} updateable />
            </div>
          </div>
          <div className="row">
            <div className="wrapper">
              <div className="actions separate">
                <Button className="button standard">
                  <Link to="/catalog">Back to catalog...</Link>
                </Button>
                <Button className="button green">Proceed to checkout...</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
