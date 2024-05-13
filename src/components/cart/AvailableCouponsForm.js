import { Input } from '@mui/material';
import {
  applyCouponInCart,
  removeCouponFromCart,
} from 'models/actions/cartActions';
import { couponUsed } from 'models/selectors/cartSelectors';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AvailableCouponsForm = ({ availableCoupons }) => {
  const dispatch = useDispatch();
  const myCouponUsed = useSelector(couponUsed);
  const [couponValue, setCouponValue] = useState('');

  return (
    <div className="coupon-form">
      <Input
        placeholder={
          !myCouponUsed?.code ? 'Do you have a coupon?' : myCouponUsed?.code
        }
        readOnly={Boolean(myCouponUsed?.code)}
        onChange={(e) => setCouponValue(e.target.value)}
        value={couponValue}
      />
      {Object.keys(myCouponUsed).length === 0 && (
        <button
          disabled={!couponValue}
          onClick={() => dispatch(applyCouponInCart(couponValue))}
          className="button next">
          Apply Coupon
        </button>
      )}
      {Object.keys(myCouponUsed).length > 0 && (
        <>
          <button
            onClick={() => dispatch(removeCouponFromCart())}
            className="button next">
            Remove Coupon
          </button>
        </>
      )}
    </div>
  );
};

export default AvailableCouponsForm;
