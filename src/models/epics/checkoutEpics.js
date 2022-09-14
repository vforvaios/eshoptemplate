import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import {
  getPaymentMethods,
  setPaymentMethods,
  checkPaymentMethod,
  getShippingMethods,
  setShippingMethods,
  checkShippingMethod,
} from 'models/actions/checkoutActions';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  map,
  mergeMap,
  concatMap,
  catchError,
  withLatestFrom,
} from 'rxjs/operators';

const getPaymentMethodsEpic = (action$, state$) =>
  action$.pipe(
    ofType(getPaymentMethods.type),
    mergeMap(() =>
      from(makeRequest('paymentmethods', 'GET', '')).pipe(
        concatMap((payload) => {
          const newPayload = payload?.map((paymentmethod, index) => {
            return index === 0
              ? { ...paymentmethod, checked: true }
              : { ...paymentmethod };
          });

          return [
            setPaymentMethods(newPayload),
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
          ),
        ),
      ),
    ),
  );

const checkPaymentMethodEpic = (action$, state$) =>
  action$.pipe(
    ofType(checkPaymentMethod.type),
    withLatestFrom(state$),
    map(
      ([
        { payload },
        {
          checkoutReducer: { paymentMethods },
        },
      ]) => {
        const newPaymentMethods = paymentMethods?.map((pm) => {
          return payload === pm?.name
            ? { ...pm, checked: true }
            : { ...pm, checked: false };
        });

        return setPaymentMethods(newPaymentMethods);
      },
    ),
  );

const getShippingMethodsEpic = (action$, state$) =>
  action$.pipe(
    ofType(getShippingMethods.type),
    mergeMap(() =>
      from(makeRequest('shippingmethods', 'GET', '')).pipe(
        concatMap((payload) => {
          const newPayload = payload?.map((shippingmethod, index) => {
            return index === 0
              ? { ...shippingmethod, checked: true }
              : { ...shippingmethod };
          });

          return [
            setShippingMethods(newPayload),
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
          ),
        ),
      ),
    ),
  );

const checkShippingMethodEpic = (action$, state$) =>
  action$.pipe(
    ofType(checkShippingMethod.type),
    withLatestFrom(state$),
    map(
      ([
        { payload },
        {
          checkoutReducer: { shippingMethods },
        },
      ]) => {
        const newShippingMethods = shippingMethods?.map((sm) => {
          return payload === sm?.name
            ? { ...sm, checked: true }
            : { ...sm, checked: false };
        });

        return setShippingMethods(newShippingMethods);
      },
    ),
  );

export {
  getPaymentMethodsEpic,
  checkPaymentMethodEpic,
  getShippingMethodsEpic,
  checkShippingMethodEpic,
};

const epics = combineEpics(
  getPaymentMethodsEpic,
  checkPaymentMethodEpic,
  getShippingMethodsEpic,
  checkShippingMethodEpic,
);

export default epics;
