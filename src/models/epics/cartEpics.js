import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import {
  getCart,
  setCart,
  updateCartItemTotal,
} from 'models/actions/cartActions';
import { token } from 'models/selectors/userSelector';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, concatMap, catchError } from 'rxjs/operators';

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

const updateCartItemTotalEpic = (action$, state$) =>
  action$.pipe(
    ofType(updateCartItemTotal.type),
    mergeMap(({ payload }) =>
      from(
        makeRequest(
          'cart/update',
          'POST',
          JSON.stringify({
            total: Number(payload.total),
            cartId: payload.cartId,
          }),
          token(state$.value),
        ),
      ).pipe(
        concatMap((payload) => {
          debugger;

          return [];
        }),
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

export { getCartEpic, updateCartItemTotalEpic };

const epics = combineEpics(getCartEpic, updateCartItemTotalEpic);

export default epics;
