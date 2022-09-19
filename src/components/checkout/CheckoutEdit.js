import Button from '@material-ui/core/Button';
import { cart } from 'models/selectors/cartSelectors';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Billing from './Billing';
import CheckoutStepper from './CheckoutStepper';
import PaymentMethods from './PaymentMethods';
import ShippingMethods from './ShippingMethods';

const CheckoutEdit = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(cart);

  useEffect(() => {
    if (cartItems?.length === 0) {
      navigate('/');
    }
  });

  return (
    <div className="content checkout step3">
      <div className="row">
        <div className="wrapper">
          <div className="page-title text-center">
            <h1>ΔΙΕΥΘΥΝΣΗ ΚΑΙ ΠΛΗΡΩΜΗ</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <CheckoutStepper step="2" />
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="actions separate">
            <Button className="button standard">
              <Link to="/catalog">ΠΙΣΩ ΣΤΟΝ ΚΑΤΑΛΟΓΟ...</Link>
            </Button>
            <Button className="button green">
              <Link to="/checkout/confirm">ΕΠΙΒΕΒΑΙΩΣΗ ΠΑΡΑΓΓΕΛΙΑΣ</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="billing-shipping-container">
            <Billing />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="payment-shipping-container">
            <PaymentMethods />
            <ShippingMethods />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="actions separate">
            <Button className="button standard">
              <Link to="/catalog">ΠΙΣΩ ΣΤΟΝ ΚΑΤΑΛΟΓΟ...</Link>
            </Button>
            <Button className="button green">
              <Link to="/checkout/confirm">ΕΠΙΒΕΒΑΙΩΣΗ ΠΑΡΑΓΓΕΛΙΑΣ</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutEdit;
