import Table from 'react-bootstrap/Table';
import CartItem from 'components/cartItem/CartItem';
import React from 'react';

const MyCart = ({ cart, updateable }) => (
  <div className="cart-content">
    <Table className="table">
      <thead>
        <tr>
          <td>ΠΕΡΙΓΡΑΦΗ</td>
          <td>ΠΟΣΟΤΗΤΑ</td>
          <td>ΤΙΜΗ</td>
          {updateable && <td />}
        </tr>
      </thead>
      <tbody>
        {cart?.map((item, index) => (
          <CartItem key={index} updateable={updateable} item={item} />
        ))}
      </tbody>
    </Table>
  </div>
);

export default MyCart;
