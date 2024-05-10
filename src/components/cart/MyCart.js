import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CartItem from 'components/cartItem/CartItem';
import React from 'react';

import AvailableCouponsForm from './AvailableCouponsForm';

const MyCart = ({ cart, updateable, availableCoupons }) => (
  <div className="cart-content">
    <Table className="table">
      <TableHead>
        <TableRow>
          <TableCell>DESCRIPTION</TableCell>
          <TableCell>QUANTITY</TableCell>
          <TableCell>PRICE</TableCell>
          {updateable && <TableCell />}
        </TableRow>
      </TableHead>
      <TableBody>
        {cart?.map((item, index) => (
          <CartItem key={index} updateable={updateable} item={item} />
        ))}
      </TableBody>
    </Table>
    {availableCoupons && (
      <AvailableCouponsForm availableCoupons={availableCoupons} />
    )}
  </div>
);

export default MyCart;
