import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import { setGeneralLoading } from 'models/actions/catalogActions';
import { toggleLoader } from 'models/actions/loaderActions';
import {
  getWishlist,
  setWishlist,
  addProductWishlist,
  removeProductWishlist,
} from 'models/actions/wishlistActions';
import { token } from 'models/selectors/userSelector';
import { wishlistProducts } from 'models/selectors/wishlistSelectors';
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
        concatMap((payload) => {
          if (payload?.error) {
            return [
              toggleShowAlert({
                message: `${payload?.error}`,
                show: true,
                type: 'error',
              }),
              setGeneralLoading(false),
            ];
          }

          return [
            toggleLoader(false),
            setWishlist(payload),
            toggleShowAlert({ message: '', show: false, type: 'error' }),
          ];
        }),
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
          wishlistReducer: { wishlist },
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
          concatMap((payload) => {
            if (payload?.error) {
              return [
                toggleShowAlert({
                  message: `${payload?.error}`,
                  show: true,
                  type: 'error',
                }),
                setGeneralLoading(false),
              ];
            }

            return [
              toggleLoader(false),
              toggleShowAlert({
                message: payload.message,
                show: true,
                type: 'success',
              }),
              setGeneralLoading(false),
            ];
          }),
          catchError((error) =>
            of(
              toggleShowAlert({
                message: `${error}`,
                type: 'error',
                show: true,
              }),
              toggleLoader(false),
              setGeneralLoading(false),
            ),
          ),
        );
      },
    ),
  );

const removeProductWishlistEpic = (action$, state$) =>
  action$.pipe(
    ofType(removeProductWishlist.type),
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
            'wishlist/remove',
            'DELETE',
            JSON.stringify({ productId }),
            token,
          ),
        ).pipe(
          concatMap((payload) => {
            if (payload?.error) {
              return [
                toggleShowAlert({
                  message: `${payload?.error}`,
                  show: true,
                  type: 'error',
                }),
                setGeneralLoading(false),
              ];
            }

            const newWishlistItems = wishlistProducts(state$.value)?.filter(
              (wi) => wi.productId !== productId,
            );

            return [
              toggleLoader(false),
              setWishlist({ results: newWishlistItems }),
              toggleShowAlert({
                message: payload.message,
                show: true,
                type: 'success',
              }),
              setGeneralLoading(false),
            ];
          }),
          catchError((error) =>
            of(
              toggleShowAlert({
                message: `${error}`,
                type: 'error',
                show: true,
              }),
              toggleLoader(false),
              setGeneralLoading(false),
            ),
          ),
        );
      },
    ),
  );

export { getWishlistEpic, addProductWishlistEpic, removeProductWishlistEpic };

const epics = combineEpics(
  getWishlistEpic,
  addProductWishlistEpic,
  removeProductWishlistEpic,
);

export default epics;
