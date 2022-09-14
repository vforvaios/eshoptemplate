import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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
    <div>
      <h3>Payment Methods</h3>
      <FormControl>
        <RadioGroup
          aria-labelledby="payment-methods"
          value={currentPaymentMethods?.find((pm) => pm?.checked)?.name || ''}
          onChange={(e) => dispatch(checkPaymentMethod(e.target.value))}
          name="payment-methods">
          {currentPaymentMethods?.map((paymentmethod) => (
            <FormControlLabel
              value={paymentmethod?.name}
              control={<Radio />}
              label={paymentmethod?.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default PaymentMethods;
