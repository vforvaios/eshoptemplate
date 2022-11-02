/* eslint-disable react-hooks/exhaustive-deps */
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import formatMoney from 'library/formatMoney';
import {
  getShippingMethods,
  checkShippingMethod,
} from 'models/actions/checkoutActions';
import { shippingMethods } from 'models/selectors/checkoutSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ShippingMethods = () => {
  const dispatch = useDispatch();
  const currentShippingMethods = useSelector(shippingMethods);

  useEffect(() => {
    dispatch(getShippingMethods());
  }, []);

  return (
    <div className="shipping-methods">
      <h3>ΤΡΟΠΟΙ ΑΠΟΣΤΟΛΗΣ</h3>
      <FormControl>
        <RadioGroup
          aria-labelledby="payment-methods"
          value={currentShippingMethods?.find((sm) => sm?.checked)?.name || ''}
          onChange={(e) => dispatch(checkShippingMethod(e.target.value))}
          name="payment-methods">
          {currentShippingMethods?.map((shippingmethod) => (
            <FormControlLabel
              key={shippingmethod?.id}
              value={shippingmethod?.name}
              control={<Radio />}
              label={`${shippingmethod?.name} ${
                shippingmethod?.cost > 0
                  ? `(${formatMoney.format(shippingmethod.cost)})`
                  : ''
              }`}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ShippingMethods;
