import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import {
  getCart,
  setCart,
  addToCart,
  removeItemFromCart,
  updateCartItemTotal,
} from 'models/actions/cartActions';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap,
  concatMap,
  catchError,
  map,
  withLatestFrom,
} from 'rxjs/operators';

// TODO - NOT USED AT THE MOMENT
const getCartEpic = (action$) =>
  action$.pipe(
    ofType(getCart.type),
    mergeMap(() =>
      from(makeRequest('cart', 'GET', '')).pipe(
        concatMap((payload) => [
          setCart(payload),
          toggleShowAlert({ message: '', show: false, type: 'error' }),
        ]),
        catchError((error) =>
          of(
            toggleShowAlert({
              message: `${error}`,
              type: 'error',
              show: true,
            }),
          ),
        ),
      ),
    ),
  );

const addToCartEpic = (action$, state$) =>
  action$.pipe(
    ofType(addToCart.type),
    withLatestFrom(state$),
    map(
      ([
        { payload },
        {
          cartReducer: { cart },
        },
      ]) => {
        const { productDescription, productId, price, productTitle } = payload;

        const productAlreadyExistsInCart =
          cart?.findIndex((item) => item?.productId === productId) >= 0;

        let newCart = [];

        if (!productAlreadyExistsInCart) {
          newCart = [
            ...cart,
            {
              productTitle,
              productId,
              productDescription,
              total: 1,
              price,
              totalPrice: price,
            },
          ];
        } else {
          newCart = cart?.map((cartItem) => {
            return cartItem.productId !== productId
              ? { ...cartItem }
              : {
                  ...cartItem,
                  price,
                  total: Number(cartItem.total) + 1,
                  totalPrice: (Number(cartItem?.total) + 1) * cartItem?.price,
                };
          });
        }

        return setCart(newCart);
      },
    ),
  );

const removeItemFromCartEpic = (action$, state$) =>
  action$.pipe(
    ofType(removeItemFromCart.type),
    withLatestFrom(state$),
    map(
      ([
        { payload },
        {
          cartReducer: { cart },
        },
      ]) => {
        const productId = payload;

        const newCart = cart?.filter((item) => item?.productId !== productId);

        return setCart(newCart);
      },
    ),
  );

const updateCartItemTotalEpic = (action$, state$) =>
  action$.pipe(
    ofType(updateCartItemTotal.type),
    withLatestFrom(state$),
    map(
      ([
        { payload },
        {
          cartReducer: { cart },
        },
      ]) => {
        const { total, productId } = payload;

        const newCart = cart?.map((item) => {
          return item?.productId !== productId
            ? { ...item }
            : { ...item, total, totalPrice: total * item.price };
        });

        return setCart(newCart);
      },
    ),
  );

export {
  getCartEpic,
  addToCartEpic,
  removeItemFromCartEpic,
  updateCartItemTotalEpic,
};

const epics = combineEpics(
  getCartEpic,
  addToCartEpic,
  removeItemFromCartEpic,
  updateCartItemTotalEpic,
);

export default epics;
