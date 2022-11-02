import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import ToolTip from '@material-ui/core/ToolTip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import formatMoney from 'library/formatMoney';
import {
  removeItemFromCart,
  updateCartItemTotal,
} from 'models/actions/cartActions';
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
          <span>{item.productTitle}</span>
        </div>
      </TableCell>
      <TableCell>
        <span className="hidden">ΠΟΣΟΤΗΤΑ</span>
        {!updateable ? (
          item.total
        ) : (
          <TextField
            type="number"
            InputProps={{
              inputProps: { min: 0 },
            }}
            value={item.total}
            onChange={(e) =>
              dispatch(
                updateCartItemTotal({
                  total: e.target.value,
                  productId: item?.productId,
                }),
              )
            }
          />
        )}
      </TableCell>
      <TableCell className={!updateable ? 'not-updateable' : null}>
        <span className="hidden">ΤΙΜΗ</span>
        <span>
          <span className="cart-item-initial-price">
            {formatMoney.format(item.initialPrice)}
          </span>
          <strong className="totalPrice">
            {formatMoney.format(item.price * item.total)}{' '}
          </strong>
          {`(${item.total}x${item.price})`}
        </span>
        {!updateable && item.total === 0 && (
          <ToolTip title="Δεν υπάρχει πλέον διαθέσιμο το προϊόν. Παρακαλώ διαγράψτε το για να συνεχίσετε.">
            <IconButton
              onClick={() =>
                dispatch(
                  removeItemFromCart({ id: item.productId, checkout: true }),
                )
              }
              className="icon-cancel-circled removeCancel">
              <DeleteForeverIcon />
            </IconButton>
          </ToolTip>
        )}
      </TableCell>
      {updateable && (
        <TableCell>
          <IconButton
            onClick={() =>
              dispatch(
                removeItemFromCart({ id: item.productId, checkout: false }),
              )
            }>
            <DeleteForeverIcon />
          </IconButton>
        </TableCell>
      )}
    </TableRow>
  );
};

export default CartItem;
