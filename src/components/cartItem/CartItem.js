import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react';

const CartItem = ({ updateable }) => (
  <TableRow>
    <TableCell>
      <div className="cart-description">
        <span>
          <img
            src="https://via.placeholder.com/100x100"
            alt="product description"
          />
        </span>
        <span>afsdfadsfds fasd afsd fasd</span>
      </div>
    </TableCell>
    <TableCell>
      {!updateable ? (
        2
      ) : (
        <TextField
          type="number"
          InputProps={{
            inputProps: { min: 0 },
          }}
          defaultValue={2}
        />
      )}
    </TableCell>
    <TableCell>
      <IconButton>
        <DeleteForeverIcon />
      </IconButton>
    </TableCell>
  </TableRow>
);

export default CartItem;
