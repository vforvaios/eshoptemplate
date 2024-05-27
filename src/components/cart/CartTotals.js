import formatMoney from 'library/formatMoney';
import getCartTotals from 'library/getCartTotals';
import getCartTotalsDiscount from 'library/getCartTotalsDiscount';
import { couponDiscount } from 'models/selectors/cartSelectors';
import {
  shippingMethods,
  paymentMethods,
} from 'models/selectors/checkoutSelectors';
import React from 'react';
import { useSelector } from 'react-redux';

const CartTotals = ({ cart, order }) => {
  const mySmCost = useSelector(shippingMethods);
  const myPmCost = useSelector(paymentMethods);
  const myCouponDiscount = useSelector(couponDiscount);
  let smCost;
  let pmCost;

  if (!order || Object.keys(order)?.length === 0) {
    smCost = mySmCost?.find((shippingmethod) => shippingmethod.checked)?.cost
      ? parseFloat(
          mySmCost?.find((shippingmethod) => shippingmethod.checked)?.cost,
        )
      : Number(0);
    pmCost = myPmCost?.find((paymentmethod) => paymentmethod.checked)?.cost
      ? parseFloat(
          myPmCost?.find((paymentmethod) => paymentmethod.checked)?.cost,
        )
      : Number(0);
  } else {
    smCost = parseFloat(order?.shippingMethodCost);
    pmCost = parseFloat(order?.paymentMethodCost);
  }

  if (Number.isNaN(smCost)) {
    smCost = parseFloat(order?.shippingMethodCost);
  }

  if (Number.isNaN(pmCost)) {
    pmCost = parseFloat(order?.paymentMethodCost);
  }
  const totalPayment =
    (smCost && smCost !== 'NaN' && Number(smCost) > 0) ||
    (pmCost && pmCost !== 'NaN' && Number(pmCost) > 0)
      ? formatMoney.format(
          parseFloat(smCost) +
            parseFloat(pmCost) +
            parseFloat(getCartTotals(cart)),
        )
      : formatMoney.format(getCartTotals(cart));

  const couponFromDiscount =
    myCouponDiscount === 0
      ? 0
      : (myCouponDiscount *
          parseFloat(
            totalPayment.substring(0, totalPayment?.indexOf('€') - 1),
          )) /
        100;

  return (
    <div className="cart-totals-container">
      <div className="cart-totals-row cart-totals-row-title">TOTALS</div>
      {myCouponDiscount > 0 && (
        <div className="cart-totals-row">
          <span className="cart-totals-name">Coupon discount:</span>
          <span className="cart-totals-value">
            {formatMoney.format(couponFromDiscount)}
          </span>
        </div>
      )}
      <div className="cart-totals-row">
        <span className="cart-totals-name">Total discount:</span>
        <span className="cart-totals-value">
          {formatMoney.format(
            getCartTotalsDiscount(cart) + parseFloat(couponFromDiscount),
          )}
        </span>
      </div>
      {Number(smCost) > Number(0) && (
        <div className="cart-totals-row">
          <span className="cart-totals-name">Shipping cost:</span>
          <span className="cart-totals-value">
            {formatMoney.format(smCost)}
          </span>
        </div>
      )}
      {Number(pmCost) > Number(0) && (
        <div className="cart-totals-row">
          <span className="cart-totals-name">Payment cost:</span>
          <span className="cart-totals-value">
            {formatMoney.format(pmCost)}
          </span>
        </div>
      )}
      <div className="cart-totals-row bold">
        <span className="cart-totals-name">Total:</span>
        <span className="cart-totals-value">
          {formatMoney.format(
            parseFloat(
              totalPayment.substring(0, totalPayment?.indexOf('€') - 1),
            ) - parseFloat(couponFromDiscount),
          )}
        </span>
      </div>
    </div>
  );
};

export default CartTotals;
