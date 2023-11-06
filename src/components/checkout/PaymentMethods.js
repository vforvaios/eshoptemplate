/* eslint-disable react-hooks/exhaustive-deps */
import formatMoney from 'library/formatMoney';
import { checkPaymentMethod } from 'models/actions/checkoutActions';
import { paymentMethods } from 'models/selectors/checkoutSelectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PaymentMethods = () => {
  const dispatch = useDispatch();
  const currentPaymentMethods = useSelector(paymentMethods);

  return (
    <div className="payment-methods">
      <h3>ΤΡΟΠΟΙ ΠΛΗΡΩΜΗΣ</h3>
      <div>
        <div
          aria-labelledby="payment-methods"
          // value={currentPaymentMethods?.find((pm) => pm?.checked)?.name || ''}
          onChange={(e) => dispatch(checkPaymentMethod(e.target.value))}
          name="payment-methods">
          {currentPaymentMethods?.map((paymentmethod) => (
            <>
              <input
                type="radio"
                name="payment-methods-map"
                key={paymentmethod?.id}
                value={paymentmethod?.name}
              />
              `${paymentmethod?.name} $
              {paymentmethod?.cost > 0
                ? `(${formatMoney.format(paymentmethod.cost)})`
                : ''}
              `
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
