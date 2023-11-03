import Chip from 'components/input/Chip';
import formatMoney from 'library/formatMoney';
import { setOrderId } from 'models/actions/userActions';
import { statuses, orderIdVisible } from 'models/selectors/userSelector';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import OrderDetails from './OrderDetails';

const Order = ({ order }) => {
  const dispatch = useDispatch();
  const orderStatuses = useSelector(statuses);
  const orderId = useSelector(orderIdVisible);
  const {
    id,
    order_code,
    dateCreated,
    paymentFirstName,
    paymentLastName,
    paymentEmail,
    totalItems,
    totalOrderPrice,
    paymentMethodCost,
    shippingMethodCost,
    statusId,
  } = order;

  return (
    <>
      <tr
        className="product-row extra"
        onClick={() => {
          id !== orderId ? dispatch(setOrderId(id)) : dispatch(setOrderId(''));
        }}>
        <td>
          <span className="hidden">ΚΩΔΙΚΟΣ</span>
          {order_code}
        </td>
        <td>
          <span className="hidden">ΗΜΕΡΟΜΗΝΙΑ</span>
          {new Date(dateCreated).toLocaleString()}
        </td>
        <td>
          <span className="hidden">ΟΝΟΜΑ</span>
          {paymentFirstName} {paymentLastName}
        </td>
        <td>
          <span className="hidden">EMAIL</span>
          {paymentEmail}
        </td>
        <td>
          <span className="hidden">ΤΙΜΗ</span>
          {formatMoney.format(
            Number(totalOrderPrice) +
              Number(paymentMethodCost) +
              Number(shippingMethodCost),
          )}
        </td>
        <td>
          <span className="hidden">ΤΕΜΑΧΙΑ</span>
          {totalItems}
        </td>
        <td>
          <Chip
            klassName={`chip chip${statusId}`}
            label={orderStatuses?.find((st) => st?.id === statusId)?.name}
          />
        </td>
      </tr>
      {orderId !== '' && orderId === id ? <OrderDetails id={orderId} /> : null}
    </>
  );
};

export default Order;
