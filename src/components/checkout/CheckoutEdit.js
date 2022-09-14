import { cart } from 'models/selectors/cartSelectors';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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
            <h1>ΠΛΗΡΩΜΗ - ΠΑΡΑΔΟΣΗ</h1>
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
    </div>
  );
};

export default CheckoutEdit;
