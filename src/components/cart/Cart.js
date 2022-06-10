import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CartItem from 'components/cartItem/CartItem';
import { cart } from 'models/selectors/cartSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const myCart = useSelector(cart);

  return (
    <div className="content cart-page">
      <div className="row">
        <div className="wrapper">
          <div className="page-title text-center">
            <h1>My Cart</h1>
            <div className="total-cart-items">
              {myCart.items.length} items in cart
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="actions separate">
            <Button className="button standard">
              <Link to="/catalog">Back to catalog...</Link>
            </Button>
            <Button className="button green">Proceed to checkout...</Button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="cart-content">
            <Table className="table">
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {myCart.items.map((item, index) => (
                  <CartItem key={item.id} updateable item={item} />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="actions separate">
            <Button className="button standard">
              <Link to="/catalog">Back to catalog...</Link>
            </Button>
            <Button className="button green">Proceed to checkout...</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
