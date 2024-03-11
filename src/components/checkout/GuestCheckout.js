import React from 'react';
import { Link } from 'react-router-dom';

const GuestCheckout = () => {
  return (
    <div className="guest-login-container">
      <div className="guest-title">GUEST</div>
      <div className="guest-content">
        <Link className="button next" to="/checkout/step2">
          OR PROCEED AS A GUEST
        </Link>
      </div>
    </div>
  );
};

export default GuestCheckout;
