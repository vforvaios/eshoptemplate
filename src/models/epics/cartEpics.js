import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import { getCart, setCart, addToCart } from 'models/actions/cartActions';
// import { token } from 'models/selectors/userSelector';
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
        const { productDescription, productId, price } = payload;

        const productAlreadyExistsInCart =
          cart?.findIndex((item) => item?.productId === productId) >= 0;

        let newCart = [];

        if (!productAlreadyExistsInCart) {
          newCart = [
            ...cart,
            {
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
                  total: cartItem.total + 1,
                  totalPrice: (cartItem?.total + 1) * cartItem?.price,
                };
          });
        }

        return setCart(newCart);
      },
    ),
  );

export { getCartEpic, addToCartEpic };

const epics = combineEpics(getCartEpic, addToCartEpic);

export default epics;
