import React from 'react';

const CheckoutStepper = ({ step }) => (
  <div className="checkout-stepper-container">
    <ul>
      <li className={step === '1' || !step ? 'active' : null}>1. LOGIN</li>
      <li className={step === '2' ? 'active' : null}>
        2. ADDRESS &amp; PAYMENT
      </li>
      <li className={step === '3' ? 'active' : null}>
        3. CONFIRM ORDER
      </li>
      <li className={step === '4' ? 'active' : null}>4. COMPLETE</li>
    </ul>
  </div>
);

export default CheckoutStepper;
