/* eslint-disable react-hooks/exhaustive-deps */
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tooltip from '@mui/material/Tooltip';
import CartTotals from 'components/cart/CartTotals';
import MyCart from 'components/cart/MyCart';
import CheckoutStepper from 'components/checkout/CheckoutStepper';
import BillingShippingInfos from 'components/orders/BillingShippingInfos';
import SEO from 'components/seo/SEO';
import { applyCouponInCart } from 'models/actions/cartActions';
import { setGeneralLoading } from 'models/actions/catalogActions';
import {
  handleSendOrder,
  updateCartProducts,
  sendOrder,
} from 'models/actions/checkoutActions';
import { cart, couponEmail, couponUsed } from 'models/selectors/cartSelectors';
import {
  orderOK,
  updatedProducts,
  billingInfo,
  shippingInfo,
  sameAsBilling,
  notes,
} from 'models/selectors/checkoutSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AgreeComponent = () => {
  return (
    <div>
      Agree with terms and conditions described in{' '}
      <Link target="_blank" to="/static/1">
        Privacy Policy
      </Link>{' '}
      page
    </div>
  );
};

const Confirm = () => {
  const myCart = useSelector(cart);
  const orderNotes = useSelector(notes);
  const myOrderOK = useSelector(orderOK);
  const myCouponUsed = useSelector(couponUsed);
  const myCouponEmail = useSelector(couponEmail);
  const productsAreUpdated = useSelector(updatedProducts);
  const myBillingInfo = useSelector(billingInfo);
  const myShippingInfo = useSelector(shippingInfo);
  const sameShipping = useSelector(sameAsBilling);

  const [agreeTerms, setAgreeTerms] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setGeneralLoading(false));
    if (myCouponUsed) {
      dispatch(applyCouponInCart());
    }
    if (myCart?.length === 0) {
      navigate('/');
    }
    if (!myOrderOK) {
      navigate('../checkout/step2');
    }
  }, []);

  return (
    <>
      <div className="content checkout step3">
        <SEO
          title="Checkout step 3"
          description="Checkout step 3 page"
          name="Tierra"
          type="article"
        />
        <div className="row">
          <div className="wrapper">
            <div className="text-center">
              <h1 className="page-title">CONFIRM</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="wrapper">
            <CheckoutStepper step="3" />
          </div>
        </div>
        <div className="row">
          <div className="wrapper">
            <div className="actions separate">
              <button className="button next">
                <Link to="/checkout/step2">Edit order</Link>
              </button>
              {productsAreUpdated && (
                <button
                  className="button red refresh"
                  onClick={() => dispatch(updateCartProducts())}>
                  <i className="icon-arrows-cw" />
                  Refresh Products
                </button>
              )}
              <Tooltip
                title={`${
                  !agreeTerms
                    ? 'You have to agree to the terms and conditions described in Privacy Policy before continuing.'
                    : 'Complete Order'
                }`}>
                <button
                  disabled={productsAreUpdated || !agreeTerms}
                  onClick={() => {
                    dispatch(setGeneralLoading(true));
                    if (myCouponUsed !== '') {
                      dispatch(handleSendOrder({ code: myCouponUsed }));
                    } else {
                      dispatch(sendOrder());
                    }
                  }}
                  className="button next">
                  Complete Order
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="wrapper">
            <MyCart cart={myCart} updateable={false} />
          </div>
        </div>
        <div className="row">
          <div className="wrapper">
            <FormControlLabel
              label={<AgreeComponent />}
              control={
                <Checkbox
                  required
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                />
              }
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
            <div className="billing-shipping-order-container">
              <BillingShippingInfos
                options={{
                  billing: {
                    firstName: myBillingInfo.name,
                    lastName: myBillingInfo.lastName,
                    address: myBillingInfo.address,
                    phone: myBillingInfo.phone,
                    postCode: myBillingInfo.postCode,
                    afm: myBillingInfo.afm,
                    eponymia: myBillingInfo.eponymia,
                    doy: myBillingInfo.doy,
                  },
                  shipping: {
                    firstName: !sameShipping
                      ? myShippingInfo.name
                      : myBillingInfo.name,
                    lastName: !sameShipping
                      ? myShippingInfo.lastName
                      : myBillingInfo.lastName,
                    address: !sameShipping
                      ? myShippingInfo.address
                      : myBillingInfo.address,
                    phone: !sameShipping
                      ? myShippingInfo.phone
                      : myBillingInfo.phone,
                    postCode: !sameShipping
                      ? myShippingInfo.postCode
                      : myBillingInfo.postCode,
                  },
                }}
              />
              {orderNotes && (
                <div className="billing-shipping-box">
                  <h3>Notes</h3>
                  <div className="order-infos">
                    <div className="order-info">
                      <span>{orderNotes}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="wrapper">
            <div className="actions separate">
              <button className="button next">
                <Link to="/checkout/step2">Edit order</Link>
              </button>
              <Tooltip
                title={`${
                  !agreeTerms
                    ? 'You have to agree to the Terms and Conditions before continuing.'
                    : 'Complete Order'
                }`}>
                <button
                  disabled={productsAreUpdated || !agreeTerms}
                  onClick={() => {
                    dispatch(setGeneralLoading(true));
                    if (myCouponUsed !== '') {
                      dispatch(
                        handleSendOrder({
                          code: myCouponUsed,
                          email: myCouponEmail,
                        }),
                      );
                    } else {
                      dispatch(sendOrder());
                    }
                  }}
                  className="button next">
                  Complete order
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
