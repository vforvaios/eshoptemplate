import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import { toggleLoader } from 'models/actions/loaderActions';
import {
  getWishlist,
  setWishlist,
  addProductWishlist,
} from 'models/actions/wishlistActions';
import { token } from 'models/selectors/userSelector';
import { ofType, combineEpics } from 'redux-observable';
import { messages } from 'resources/constants';
import { from, of } from 'rxjs';
import {
  mergeMap,
  concatMap,
  catchError,
  withLatestFrom,
} from 'rxjs/operators';

const getWishlistEpic = (action$, state$) =>
  action$.pipe(
    ofType(getWishlist.type),
    mergeMap(() =>
      from(makeRequest('wishlist', 'GET', '', token(state$.value))).pipe(
        concatMap((payload) => [
          toggleLoader(false),
          setWishlist(payload),
          toggleShowAlert({ message: '', show: false, type: 'error' }),
        ]),
        catchError((error) =>
          of(
            toggleShowAlert({
              message: `${error}`,
              type: 'error',
              show: true,
            }),
            toggleLoader(false),
          ),
        ),
      ),
    ),
  );

const addProductWishlistEpic = (action$, state$) =>
  action$.pipe(
    ofType(addProductWishlist.type),
    withLatestFrom(state$),
    mergeMap(
      ([
        { payload },
        {
          userReducer: {
            user: { token },
          },
        },
      ]) => {
        if (!token) {
          return toggleShowAlert({
            message: messages.loginFirst,
            show: true,
            type: 'error',
          });
        }

        const productId = payload;

        return from(
          makeRequest(
            'wishlist/add',
            'POST',
            JSON.stringify({ productId }),
            token,
          ),
        ).pipe(
          concatMap((payload) => [
            toggleLoader(false),
            toggleShowAlert({
              message: payload.message,
              show: true,
              type: 'success',
            }),
          ]),
          catchError((error) =>
            of(
              toggleShowAlert({
                message: `${error}`,
                type: 'error',
                show: true,
              }),
              toggleLoader(false),
            ),
          ),
        );
      },
    ),
  );

export { getWishlistEpic, addProductWishlistEpic };

const epics = combineEpics(getWishlistEpic, addProductWishlistEpic);

export default epics;
