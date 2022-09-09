import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { removeItemFromCart } from 'models/actions/cartActions';
import React from 'react';
import { useDispatch } from 'react-redux';

const CartItem = ({ updateable, item }) => {
  const dispatch = useDispatch();

  return (
    <TableRow>
      <TableCell>
        <div className="cart-description">
          <span>
            <img
              src="https://via.placeholder.com/100x100"
              alt="product description"
            />
          </span>
          <span>{item.productDescription}</span>
        </div>
      </TableCell>
      <TableCell>
        <span className="hidden">Quantity</span>
        {!updateable ? (
          item.total
        ) : (
          <TextField
            type="number"
            InputProps={{
              inputProps: { min: 0 },
            }}
            value={item.total}
          />
        )}
      </TableCell>
      <TableCell>
        <span className="hidden">Price</span>
        <span>
          <strong className="totalPrice">{item.totalPrice} </strong>
          {`(${item.total}x${item.price})`}
        </span>
      </TableCell>
      {updateable && (
        <TableCell>
          <IconButton
            onClick={() => dispatch(removeItemFromCart(item.productId))}>
            <DeleteForeverIcon />
          </IconButton>
        </TableCell>
      )}
    </TableRow>
  );
};

export default CartItem;
