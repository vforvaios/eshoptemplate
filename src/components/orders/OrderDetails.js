/* eslint-disable react-hooks/exhaustive-deps */
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CartTotals from 'components/cart/CartTotals';
import MyCart from 'components/cart/MyCart';
import { setGeneralLoading } from 'models/actions/catalogActions';
import { getOrderDetails } from 'models/actions/userActions';
import { orderDetails } from 'models/selectors/userSelector';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const OrderDetails = ({ id }) => {
  const displayedOrder = useSelector(orderDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id !== '') {
      dispatch(setGeneralLoading(true));
      dispatch(getOrderDetails(id));
    }
  }, [id]);

  return (
    <TableRow className="order-details">
      <TableCell colSpan={7}>
        <div className="row">
          <div className="wrapper">
            <MyCart cart={displayedOrder?.products} />
          </div>
        </div>
        <div className="row">
          <div className="wrapper">
            <CartTotals
              cart={displayedOrder?.products}
              order={displayedOrder?.order}
            />
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default OrderDetails;
