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
    <tr>
      <td>
        <div className="cart-description">
          <span>
            <img
              src="https://via.placeholder.com/100x100"
              alt="product description"
            />
          </span>
          <span>{item.productTitle}</span>
        </div>
      </td>
      <td>
        <span className="hidden">ΠΟΣΟΤΗΤΑ</span>
        {!updateable ? (
          item.total
        ) : (
          <input
            type="number"
            min={0}
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
      </td>
      <td className={!updateable ? 'not-updateable' : null}>
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
          <i
            title="Δεν υπάρχει πλέον διαθέσιμο το προϊόν. Παρακαλώ διαγράψτε το για να συνεχίσετε."
            class="bi bi-trash removeCancel"
            onClick={() =>
              dispatch(
                removeItemFromCart({ id: item.productId, checkout: true }),
              )
            }
          />
        )}
      </td>
      {updateable && (
        <td>
          <i
            class="bi bi-trash"
            onClick={() =>
              dispatch(
                removeItemFromCart({ id: item.productId, checkout: false }),
              )
            }
          />
        </td>
      )}
    </tr>
  );
};

export default CartItem;
