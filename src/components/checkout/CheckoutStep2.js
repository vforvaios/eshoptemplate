import CheckoutStepper from 'components/checkout/CheckoutStepper';
import React from 'react';

const CheckoutStep2 = () => {
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
    </div>
  );
};

export default CheckoutStep2;
