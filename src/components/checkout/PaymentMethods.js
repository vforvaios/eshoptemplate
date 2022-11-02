/* eslint-disable react-hooks/exhaustive-deps */
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import formatMoney from 'library/formatMoney';
import {
  getPaymentMethods,
  checkPaymentMethod,
} from 'models/actions/checkoutActions';
import { paymentMethods } from 'models/selectors/checkoutSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PaymentMethods = () => {
  const dispatch = useDispatch();
  const currentPaymentMethods = useSelector(paymentMethods);

  useEffect(() => {
    dispatch(getPaymentMethods());
  }, []);

  return (
    <div className="payment-methods">
      <h3>ΤΡΟΠΟΙ ΠΛΗΡΩΜΗΣ</h3>
      <FormControl>
        <RadioGroup
          aria-labelledby="payment-methods"
          value={currentPaymentMethods?.find((pm) => pm?.checked)?.name || ''}
          onChange={(e) => dispatch(checkPaymentMethod(e.target.value))}
          name="payment-methods">
          {currentPaymentMethods?.map((paymentmethod) => (
            <FormControlLabel
              key={paymentmethod?.id}
              value={paymentmethod?.name}
              control={<Radio />}
              label={`${paymentmethod?.name} ${
                paymentmethod?.cost > 0
                  ? `(${formatMoney.format(paymentmethod.cost)})`
                  : ''
              }`}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default PaymentMethods;
