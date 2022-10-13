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
  setGeneralLoading,
  removeSelectedFilter,
  getFilterBrands,
  setFilterBrands,
  getPricesRange,
  setInitialPricesRange,
  getCatalogWithPrices,
  setCatalogSorting,
  setCurrentCatalogPage,
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

const getFilterBrandsEpic = (action$) =>
  action$.pipe(
    ofType(getFilterBrands.type),
    mergeMap(() =>
      from(makeRequest('brands', 'GET', '')).pipe(
        concatMap((payload) => [
          setFilterBrands(payload),
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

const getPricesRangeEpic = (action$) =>
  action$.pipe(
    ofType(getPricesRange.type),
    mergeMap(() =>
      from(makeRequest('prices', 'GET', '')).pipe(
        concatMap((payload) => [
          setInitialPricesRange(payload),
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
      getCatalogWithPrices.type,
      setCatalogSorting.type,
      setCurrentCatalogPage.type,
    ),
    withLatestFrom(state$),
    mergeMap(
      ([
        ,
        {
          catalogReducer: { filters, sorting, catalog },
        },
      ]) => {
        let requestCategory = '';
        let requestSubCategory = '';
        let requestPriceRange = '';
        const requestPage = catalog.pagination.currentPage;

        const {
          selectedCategory,
          selectedSubCategory,
          selectedPriceRange,
        } = filters;

        if (selectedCategory) {
          requestCategory = selectedCategory;
        }

        if (selectedSubCategory) {
          requestSubCategory = selectedSubCategory;
        }

        if (selectedPriceRange.length > 0) {
          requestPriceRange = selectedPriceRange.join();
        }

        return from(
          makeRequest(
            `products?category=${requestCategory}&subCategory=${requestSubCategory}&prices=${requestPriceRange}&sort=${sorting}&page=${requestPage}`,
            'GET',
            '',
          ),
        ).pipe(
          concatMap((payload) => [
            setCatalogProducts(payload),
            toggleShowAlert({ message: '', show: false, type: 'error' }),
            setGeneralLoading(false),
          ]),
          catchError((error) =>
            of(
              toggleShowAlert({
                message: `${error}`,
                type: 'error',
                show: true,
              }),
              setGeneralLoading(false),
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
  getFilterBrandsEpic,
  getPricesRangeEpic,
};

const epics = combineEpics(
  getProductDetailsEpic,
  getRelatedProductsEpic,
  getFilterCategoriesEpic,
  getCatalogEpic,
  getFilterBrandsEpic,
  getPricesRangeEpic,
);

export default epics;
