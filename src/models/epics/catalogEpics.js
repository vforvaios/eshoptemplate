import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import {
  getProductDetails,
  setProductPage,
} from 'models/actions/catalogActions';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, concatMap, catchError } from 'rxjs/operators';

const getProductDetailsEpic = (action$) =>
  action$.pipe(
    ofType(getProductDetails.type),
    mergeMap(({ payload }) =>
      from(makeRequest(`products/${payload}`, 'GET', '')).pipe(
        concatMap((payload) => [
          setProductPage(payload),
          toggleShowAlert({ message: '', show: false, type: 'error' }),
        ]),
        catchError((error) =>
          of(
            toggleShowAlert({ message: `${error}`, type: 'error', show: true }),
          ),
        ),
      ),
    ),
  );

export { getProductDetailsEpic };

const epics = combineEpics(getProductDetailsEpic);

export default epics;
