import { Input } from '@mui/material';
import { setCouponInCart } from '@/models/actions/cartActions';
import { couponUsed } from '@/models/selectors/cartSelectors';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AvailableCouponsForm = () => {
  const dispatch = useDispatch();
  const myCouponUsed = useSelector(couponUsed);
  const [couponValue, setCouponValue] = useState('');

  return (
    <>
      <div className="coupon-form">
        <Input
          placeholder="Do you have a coupon?"
          onChange={(e) => setCouponValue(e.target.value)}
          value={couponValue}
        />
        <button
          onClick={() => {
            dispatch(setCouponInCart(couponValue ? couponValue : ''));
            setCouponValue('');
          }}
          className="button next">
          {myCouponUsed === '' ? 'Apply Coupon' : 'Remove Coupon'}
        </button>
      </div>
      {myCouponUsed !== '' && (
        <div className="coupon-used">
          Coupon will be evaluated through the checkout process and you will be
          informed. ({myCouponUsed})
        </div>
      )}
    </>
  );
};

export default AvailableCouponsForm;
