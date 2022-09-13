import CheckoutStepper from 'components/checkout/CheckoutStepper';
import React from 'react';

import Billing from './Billing';

const CheckoutEdit = () => {
  return (
    <div className="content checkout step3">
      <div className="row">
        <div className="wrapper">
          <div className="page-title text-center">
            <h1>Billing/Shipping</h1>
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
    </div>
  );
};

export default CheckoutEdit;
