import React from 'react';

const CheckoutStepper = ({ step }) => (
  <div className="checkout-stepper-container">
    <ul>
      <li className={step === '1' || !step ? 'active' : null}>1</li>
      <li className={step === '2' ? 'active' : null}>2</li>
      <li className={step === '3' ? 'active' : null}>3</li>
      <li className={step === '4' ? 'active' : null}>4</li>
    </ul>
  </div>
);

export default CheckoutStepper;
