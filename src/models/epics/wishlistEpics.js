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
  map,
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
    map(
      ([
        ,
        {
          userReducer: { token },
        },
      ]) => {
        if (!token) {
          return toggleShowAlert({
            message: messages.loginFirst,
            show: true,
            type: 'error',
          });
        }

        // TODO - ADD TO WISHLIST WHEN USER IS LOGGEDIN
        return {};
      },
    ),
  );

export { getWishlistEpic, addProductWishlistEpic };

const epics = combineEpics(getWishlistEpic, addProductWishlistEpic);

export default epics;
