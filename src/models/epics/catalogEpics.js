import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import {
  getProductDetails,
  setProductPage,
  getRelatedProducts,
  setRelatedProducts,
  setFilterCategories,
  setSelectedFilter,
  setCatalogProducts,
  getInitialCatalog,
  setGeneralLoading,
  removeSelectedFilter,
  setFilterBrands,
  setInitialPricesRange,
  getCatalogWithPrices,
  setCatalogSorting,
  setCurrentCatalogPage,
  setSelectedCategory,
  setSelectedCategoryAndSubCategory,
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
    ofType(getInitialCatalog.type),
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
    ofType(setFilterCategories.type),
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
    ofType(setFilterBrands.type),
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
      setInitialPricesRange.type,
      removeSelectedFilter.type,
      getCatalogWithPrices.type,
      setCatalogSorting.type,
      setCurrentCatalogPage.type,
      setSelectedCategory.type,
      setSelectedCategoryAndSubCategory.type,
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
        let requestBrand = '';
        let requestPriceRange = '';
        const requestPage = catalog.pagination.currentPage;

        const {
          selectedCategory,
          selectedBrand,
          selectedPriceRange,
          selectedSubCategory,
        } = filters;

        if (selectedCategory) {
          requestCategory = selectedCategory;
        }

        if (selectedSubCategory) {
          requestSubCategory = selectedSubCategory;
        }

        if (selectedBrand) {
          requestBrand = selectedBrand;
        }

        if (selectedPriceRange.length > 0) {
          requestPriceRange = selectedPriceRange.join();
        }

        return from(
          makeRequest(
            `products?category=${requestCategory}&subCategory=${requestSubCategory}&brand=${requestBrand}&prices=${requestPriceRange}&sort=${sorting}&page=${requestPage}`,
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
