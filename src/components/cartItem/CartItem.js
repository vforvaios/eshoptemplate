import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import ToolTip from '@mui/material/Tooltip';
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
              className="cart-item-image"
              src={`${process.env.REACT_APP_IMAGES_URL}/${
                item?.imgHref?.indexOf('#') !== -1
                  ? item?.imgHref
                      ?.substr(0, item?.imgHref.indexOf('#'))
                      ?.split('#')?.[0]
                  : item?.imgHref
              }`}
              alt="product description"
            />
          </span>
          <span>{item.productTitle}</span>
        </div>
      </TableCell>
      <TableCell>
        <span className="hidden">QUANTITY</span>
        {!updateable ? (
          item.total
        ) : (
          <TextField
            variant="standard"
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
        <span className="hidden">PRICE</span>
        <span>
          {item.initialPrice !== 'undefined' && item.initialPrice > 0 && (
            <span className="cart-item-initial-price">
              {formatMoney.format(item.initialPrice)}
            </span>
          )}
          <strong className="totalPrice">
            {formatMoney.format(item.price * item.total)}{' '}
          </strong>
        </span>
        {!updateable && item.total === 0 && (
          <ToolTip title="This product is no longer available. Please remove it and proceed.">
            <IconButton
              onClick={() =>
                dispatch(
                  removeItemFromCart({ id: item.productId, checkout: true }),
                )
              }
              className="icon-cancel-circled removeCancel">
              <i className="icon-trash-empty" />
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
            <i className="icon-trash-empty" />
          </IconButton>
        </TableCell>
      )}
    </TableRow>
  );
};

export default CartItem;
