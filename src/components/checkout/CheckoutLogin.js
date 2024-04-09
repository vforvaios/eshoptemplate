import SEO from 'components/seo/SEO';
import Login from 'components/user/Login';
import React from 'react';

import CheckoutStepper from './CheckoutStepper';
import GuestCheckout from './GuestCheckout';

const CheckoutLogin = () => {
  return (
    <div className="content checkout step1">
      <SEO
        title="Checkout step 1"
        description="Checkout step 1 page"
        name="Tierra"
        type="article"
      />
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
