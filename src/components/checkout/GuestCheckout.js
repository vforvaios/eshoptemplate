import React from 'react';
import { Link } from 'react-router-dom';

const GuestCheckout = () => {
  return (
    <div className="guest-login-container">
      <div className="guest-title">GUEST</div>
      <div className="guest-content">
        <div>or proceed as a guest</div>
        <Link className="button next" to="/checkout/step2">
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default GuestCheckout;
