import MyCart from 'components/cart/MyCart';
import { cart } from 'models/selectors/cartSelectors';
import { token } from 'models/selectors/userSelector';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const myCart = useSelector(cart);
  const userToken = useSelector(token);

  return (
    <div className="content cart-page">
      <div className="row">
        <div className="wrapper">
          <div className="page-title text-center">
            <h1>Το καλάθι μου</h1>
            <div className="total-cart-items">
              {myCart?.reduce((acc, curr) => {
                acc = Number(acc) + Number(curr?.total);

                return acc;
              }, 0)}{' '}
              τεμάχια στο καλάθι
            </div>
          </div>
        </div>
      </div>
      {myCart?.length > 0 && (
        <>
          <div className="row">
            <div className="wrapper">
              <div className="actions separate">
                <button className="button back">
                  <Link to="/catalog">ΠΙΣΩ ΣΤΟΝ ΚΑΤΑΛΟΓΟ...</Link>
                </button>
                {!userToken ? (
                  <Link to="/checkout/step1" className="navigation next">
                    ΑΓΟΡΑ...
                  </Link>
                ) : (
                  <Link to="/checkout/step2" className="navigation next">
                    ΑΓΟΡΑ...
                  </Link>
                )}
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
                <button className="button back">
                  <Link to="/catalog">ΠΙΣΩ ΣΤΟΝ ΚΑΤΑΛΟΓΟ...</Link>
                </button>
                {!userToken ? (
                  <Link to="/checkout/step1" className="navigation next">
                    ΑΓΟΡΑ...
                  </Link>
                ) : (
                  <Link to="/checkout/step2" className="navigation next">
                    ΑΓΟΡΑ...
                  </Link>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
