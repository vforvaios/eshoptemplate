import React from 'react';

const BillingShippingInfos = ({ options }) => (
  <>
    <div className="billing-shipping-box">
      <h3>Payment Info</h3>
      <div className="order-infos">
        <div className="order-info">
          <span>Name: </span>
          <strong>{options?.billing?.firstName}</strong>
        </div>
        <div className="order-info">
          <span>Surname: </span>
          <strong>{options?.billing?.lastName}</strong>
        </div>
        <div className="order-info">
          <span>Address: </span>
          <strong>
            {options?.billing?.address}, {options?.billing?.postCode}
          </strong>
        </div>
        <div className="order-info">
          <span>Phone: </span>
          <strong>{options?.billing?.phone}</strong>
        </div>
      </div>
    </div>
    <div className="billing-shipping-box">
      <h3>Shipping Info</h3>
      <div className="order-infos">
        <div className="order-info">
          <span>Name: </span>
          <strong>{options?.shipping?.firstName}</strong>
        </div>
        <div className="order-info">
          <span>Surname: </span>
          <strong>{options?.shipping?.lastName}</strong>
        </div>
        <div className="order-info">
          <span>Address: </span>
          <strong>
            {options?.shipping?.address}, {options?.shipping?.postCode}
          </strong>
        </div>
        <div className="order-info">
          <span>Phone: </span>
          <strong>{options?.shipping?.phone}</strong>
        </div>
      </div>
    </div>
  </>
);

export default BillingShippingInfos;
