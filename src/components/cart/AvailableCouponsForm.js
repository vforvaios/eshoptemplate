import { Input } from '@mui/material';
import { applyCouponInCart } from 'models/actions/cartActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AvailableCouponsForm = ({ availableCoupons }) => {
  const dispatch = useDispatch();
  const [couponValue, setCouponValue] = useState('');

  return (
    <div className="coupon-form">
      <Input
        placeholder="Do you have a coupon?"
        onChange={(e) => setCouponValue(e.target.value)}
        value={couponValue}
      />
      <button
        disabled={!couponValue}
        onClick={() => dispatch(applyCouponInCart(couponValue))}
        className="button next">
        Apply Coupon
      </button>
    </div>
  );
};

export default AvailableCouponsForm;
