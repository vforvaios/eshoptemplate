import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import {
  getProductDetails,
  setProductPage,
  getRelatedProducts,
  setRelatedProducts,
  getFilterCategories,
  setFilterCategories,
  setSelectedFilter,
  setCatalogProducts,
  getInitialCatalog,
  setCatalogLoading,
  removeSelectedFilter,
  getFilterSubCategories,
  setFilterSubCategories,
} from 'models/actions/catalogActions';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap,
  concatMap,
  catchError,
  withLatestFrom,
} from 'rxjs/operators';

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

const getFilterCategoriesEpic = (action$) =>
  action$.pipe(
    ofType(getFilterCategories.type),
    mergeMap(() =>
      from(makeRequest('categories', 'GET', '')).pipe(
        concatMap((payload) => [
          setFilterCategories(payload),
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

const getFilterSubCategoriesEpic = (action$) =>
  action$.pipe(
    ofType(getFilterSubCategories.type),
    mergeMap(() =>
      from(makeRequest('subcategories', 'GET', '')).pipe(
        concatMap((payload) => [
          setFilterSubCategories(payload),
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

const getCatalogEpic = (action$, state$) =>
  action$.pipe(
    ofType(
      setSelectedFilter.type,
      getInitialCatalog.type,
      removeSelectedFilter.type,
    ),
    withLatestFrom(state$),
    mergeMap(
      ([
        ,
        {
          catalogReducer: { filters },
        },
      ]) => {
        let requestCategory = '';
        const { selectedCategory } = filters;

        if (selectedCategory) {
          requestCategory = selectedCategory;
        }

        return from(
          makeRequest(`products?category=${requestCategory}`, 'GET', ''),
        ).pipe(
          concatMap((payload) => [
            setCatalogProducts(payload.results),
            toggleShowAlert({ message: '', show: false, type: 'error' }),
            setCatalogLoading(false),
          ]),
          catchError((error) =>
            of(
              toggleShowAlert({
                message: `${error}`,
                type: 'error',
                show: true,
              }),
              setCatalogLoading(false),
            ),
          ),
        );
      },
    ),
  );

export {
  getProductDetailsEpic,
  getRelatedProductsEpic,
  getFilterCategoriesEpic,
  getCatalogEpic,
  getFilterSubCategoriesEpic,
};

const epics = combineEpics(
  getProductDetailsEpic,
  getRelatedProductsEpic,
  getFilterCategoriesEpic,
  getCatalogEpic,
  getFilterSubCategoriesEpic,
);

export default epics;
