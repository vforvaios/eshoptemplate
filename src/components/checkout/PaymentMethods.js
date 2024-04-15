/* eslint-disable react-hooks/exhaustive-deps */
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Popover from '@mui/material/Popover';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import formatMoney from 'library/formatMoney';
import { checkPaymentMethod } from 'models/actions/checkoutActions';
import { paymentMethods } from 'models/selectors/checkoutSelectors';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PaymentMethods = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const currentPaymentMethods = useSelector(paymentMethods);

  const paymentMethodForDepositDescription = currentPaymentMethods?.find(
    (p) => p?.description,
  );

  const handlePaymentInfoClicked = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="payment-methods">
      <h3>
        PAYMENT METHODS{' '}
        <span className="info-icon" onClick={handlePaymentInfoClicked}>
          &#128712;
        </span>
        <Popover
          overlayClassName="info-popover"
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}>
          {paymentMethodForDepositDescription?.description}
        </Popover>
      </h3>
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
