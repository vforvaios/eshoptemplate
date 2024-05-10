import CartTotals from 'components/cart/CartTotals';
import MyCart from 'components/cart/MyCart';
import SEO from 'components/seo/SEO';
import { getAvailableCoupons } from 'models/actions/cartActions';
import { setGeneralLoading } from 'models/actions/catalogActions';
import { cart, availableCoupons } from 'models/selectors/cartSelectors';
import { token } from 'models/selectors/userSelector';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const myCart = useSelector(cart);
  const userToken = useSelector(token);
  const allAvailableCoupons = useSelector(availableCoupons);

  useEffect(() => {
    dispatch(setGeneralLoading(true));
    dispatch(getAvailableCoupons());
  }, []);

  return (
    <div className="content cart-page">
      <SEO title="Cart" description="Cart page" name="Tierra" type="article" />
      <div className="row">
        <div className="wrapper">
          <div className="text-center">
            <h1 className="page-title">MY CART</h1>
          </div>
        </div>
      </div>
      {myCart?.length > 0 && (
        <>
          <div className="row">
            <div className="wrapper">
              <div className="actions separate">
                <button className="button next">
                  <Link to="/catalog">Back</Link>
                </button>
                {!userToken ? (
                  <Link to="/checkout/step1" className="navigation next">
                    Checkout
                  </Link>
                ) : (
                  <Link to="/checkout/step2" className="navigation next">
                    Checkout
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="wrapper">
              <MyCart
                availableCoupons={allAvailableCoupons}
                cart={myCart}
                updateable
              />
            </div>
          </div>
          <div className="row">
            <div className="wrapper">
              <CartTotals cart={myCart} />
            </div>
          </div>
          <div className="row">
            <div className="wrapper">
              <div className="actions separate">
                <button className="button next">
                  <Link to="/catalog">Back</Link>
                </button>
                {!userToken ? (
                  <Link to="/checkout/step1" className="navigation next">
                    Checkout
                  </Link>
                ) : (
                  <Link to="/checkout/step2" className="navigation next">
                    Checkout
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
