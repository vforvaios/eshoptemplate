import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CartItem from 'components/cartItem/CartItem';
import React from 'react';

const MyCart = ({ cart, updateable }) => (
  <div className="cart-content">
    <Table className="table">
      <TableHead>
        <TableRow>
          <TableCell>Description</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Price</TableCell>
          {updateable && <TableCell />}
        </TableRow>
      </TableHead>
      <TableBody>
        {cart?.map((item) => (
          <CartItem
            key={item.id}
            updateable={updateable}
            item={item}
            cartId={cart.id}
          />
        ))}
      </TableBody>
    </Table>
  </div>
);

export default MyCart;
