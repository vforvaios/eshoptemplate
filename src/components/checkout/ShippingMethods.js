/* eslint-disable react-hooks/exhaustive-deps */
import formatMoney from 'library/formatMoney';
import { checkShippingMethod } from 'models/actions/checkoutActions';
import { shippingMethods } from 'models/selectors/checkoutSelectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ShippingMethods = () => {
  const dispatch = useDispatch();
  const currentShippingMethods = useSelector(shippingMethods);

  return (
    <div className="shipping-methods">
      <h3>ΤΡΟΠΟΙ ΑΠΟΣΤΟΛΗΣ</h3>
      <div>
        <div
          aria-labelledby="shipping-methods"
          value={currentShippingMethods?.find((sm) => sm?.checked)?.name || ''}
          onChange={(e) => dispatch(checkShippingMethod(e.target.value))}
          name="shipping-methods">
          {currentShippingMethods?.map((shippingmethod) => (
            <>
              <input
                type="radio"
                name="shipping-methods-map"
                key={shippingmethod?.id}
                value={shippingmethod?.name}
              />
              {shippingmethod?.cost > 0
                ? `(${formatMoney.format(shippingmethod.cost)})`
                : ''}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingMethods;
