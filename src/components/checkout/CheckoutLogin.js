import Login from 'components/user/Login';
import React from 'react';

import CheckoutStepper from './CheckoutStepper';
import GuestCheckout from './GuestCheckout';

const CheckoutLogin = () => {
  return (
    <div className="content checkout step3">
      <div className="row">
        <div className="wrapper">
          <div className="page-title text-center">
            <h1>Proceed as guest or user</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <CheckoutStepper step="1" />
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <Login />
          <div className="login-container">
            <GuestCheckout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLogin;
