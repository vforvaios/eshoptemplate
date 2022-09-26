import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import {
  getProductDetails,
  setProductPage,
  getRelatedProducts,
  setRelatedProducts,
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

const getRelatedProductsEpic = (action$) =>
  action$.pipe(
    ofType(getRelatedProducts.type),
    mergeMap(({ payload }) =>
      from(makeRequest(`products/${payload}/related`, 'GET', '')).pipe(
        concatMap((payload) => [
          setRelatedProducts(payload),
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

export { getProductDetailsEpic, getRelatedProductsEpic };

const epics = combineEpics(getProductDetailsEpic, getRelatedProductsEpic);

export default epics;
