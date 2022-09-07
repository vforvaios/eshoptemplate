import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import { toggleLoader } from 'models/actions/loaderActions';
import { getWishlist, setWishlist } from 'models/actions/wishlistActions';
import { token } from 'models/selectors/userSelector';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, concatMap, catchError } from 'rxjs/operators';

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

export { getWishlistEpic };

const epics = combineEpics(getWishlistEpic);

export default epics;
