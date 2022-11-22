import Chip from '@mui/material/Chip';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import formatMoney from 'library/formatMoney';
import { statuses } from 'models/selectors/userSelector';
import React from 'react';
import { useSelector } from 'react-redux';

const Order = ({ order, toggleOrder }) => {
  const orderStatuses = useSelector(statuses);
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
    <TableRow className="product-row extra">
      <TableCell>
        <span className="hidden">ΚΩΔΙΚΟΣ</span>
        {order_code}
      </TableCell>
      <TableCell>
        <span className="hidden">ΗΜΕΡΟΜΗΝΙΑ</span>
        {new Date(dateCreated).toLocaleString()}
      </TableCell>
      <TableCell>
        <span className="hidden">ΟΝΟΜΑ</span>
        {paymentFirstName} {paymentLastName}
      </TableCell>
      <TableCell>
        <span className="hidden">EMAIL</span>
        {paymentEmail}
      </TableCell>
      <TableCell>
        <span className="hidden">ΤΙΜΗ</span>
        {formatMoney.format(
          Number(totalOrderPrice) +
            Number(paymentMethodCost) +
            Number(shippingMethodCost),
        )}
      </TableCell>
      <TableCell>
        <span className="hidden">ΤΕΜΑΧΙΑ</span>
        {totalItems}
      </TableCell>
      <TableCell>
        <Chip
          className={`chip chip${statusId}`}
          label={orderStatuses?.find((st) => st?.id === statusId)?.name}
        />
      </TableCell>
      <TableCell>
        <button className="button action" onClick={() => toggleOrder(id)}>
          <Tooltip title="Δες την παραγγελία">
            <i className="icon-pencil" />
          </Tooltip>
        </button>
      </TableCell>
    </TableRow>
  );
};

export default Order;
