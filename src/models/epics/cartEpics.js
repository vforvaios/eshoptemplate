import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import { getCart, setCart } from 'models/actions/cartActions';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, concatMap, catchError } from 'rxjs/operators';

const getCartEpic = (action$) =>
  action$.pipe(
    ofType(getCart.type),
    mergeMap(() =>
      from(makeRequest('cart', 'GET', '')).pipe(
        concatMap((payload) => [
          // toggleLoader(false),
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
            // toggleLoader(false),
          ),
        ),
      ),
    ),
  );

export { getCartEpic };

const epics = combineEpics(getCartEpic);

export default epics;
