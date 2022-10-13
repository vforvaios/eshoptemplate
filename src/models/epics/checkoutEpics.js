import makeRequest from 'library/makeRequest';
import transformErrorMessages from 'library/transformErrorMessages';
import { toggleShowAlert } from 'models/actions/alertActions';
import { setGeneralLoading } from 'models/actions/catalogActions';
import {
  getPaymentMethods,
  setPaymentMethods,
  checkPaymentMethod,
  getShippingMethods,
  setShippingMethods,
  checkShippingMethod,
  sendOrder,
  navigateToSuccessCheckout,
  checkOrderInfo,
  setCheckoutError,
  navigateToConfirmPage,
  setOrderOk,
  setCanSeeSuccessPage,
} from 'models/actions/checkoutActions';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap,
  concatMap,
  catchError,
  withLatestFrom,
  tap,
  ignoreElements,
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
    concatMap(
      ([
        { payload },
        {
          checkoutReducer: { paymentMethods, shippingMethods },
        },
      ]) => {
        const newPaymentMethods = paymentMethods?.map((pm) => {
          return payload === pm?.name
            ? { ...pm, checked: true }
            : { ...pm, checked: false };
        });

        // ΠΑΡΑΛΑΒΗ ΣΤΟ ΚΑΤΑΣΤΗΜΑ id=2
        const paralaviChecked = shippingMethods.find((sm) => sm?.id === 2)
          .checked;

        if (
          paralaviChecked &&
          paymentMethods.find((pm) => pm.name === payload)?.id !== 2
        ) {
          const newShippingMethods = shippingMethods?.map((sm, index) => {
            return index === 0
              ? { ...sm, checked: true }
              : { ...sm, checked: false };
          });

          return [
            setPaymentMethods(newPaymentMethods),
            setShippingMethods(newShippingMethods),
          ];
        }

        if (
          !paralaviChecked &&
          paymentMethods.find((pm) => pm.name === payload)?.id === 2
        ) {
          const newShippingMethods = shippingMethods?.map((sm) => {
            return sm.id === 2
              ? { ...sm, checked: true }
              : { ...sm, checked: false };
          });

          return [
            setPaymentMethods(newPaymentMethods),
            setShippingMethods(newShippingMethods),
          ];
        }

        return [setPaymentMethods(newPaymentMethods)];
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
    concatMap(
      ([
        { payload },
        {
          checkoutReducer: { shippingMethods, paymentMethods },
        },
      ]) => {
        const newShippingMethods = shippingMethods?.map((sm) => {
          return payload === sm?.name
            ? { ...sm, checked: true }
            : { ...sm, checked: false };
        });

        // ΠΛΗΡΩΜΗ ΣΤΟ ΚΑΤΑΣΤΗΜΑ id=2
        const pliromiKatastimaChecked = paymentMethods.find(
          (pm) => pm?.id === 2,
        ).checked;

        if (
          pliromiKatastimaChecked &&
          shippingMethods.find((sm) => sm.name === payload)?.id !== 2
        ) {
          const newPaymentMethods = paymentMethods?.map((pm, index) => {
            return index === 0
              ? { ...pm, checked: true }
              : { ...pm, checked: false };
          });

          return [
            setPaymentMethods(newPaymentMethods),
            setShippingMethods(newShippingMethods),
          ];
        }

        if (
          !pliromiKatastimaChecked &&
          shippingMethods.find((sm) => sm.name === payload)?.id === 2
        ) {
          const newPaymentMethods = paymentMethods?.map((pm) => {
            return pm.id === 2
              ? { ...pm, checked: true }
              : { ...pm, checked: false };
          });

          return [
            setPaymentMethods(newPaymentMethods),
            setShippingMethods(newShippingMethods),
          ];
        }

        return [setShippingMethods(newShippingMethods)];
      },
    ),
  );

const sendOrderEpic = (action$, state$) =>
  action$.pipe(
    ofType(sendOrder.type),
    withLatestFrom(state$),
    mergeMap(
      ([
        ,
        {
          checkoutReducer,
          cartReducer: { cart },
          userReducer: { user },
        },
      ]) => {
        const {
          paymentMethods,
          shippingMethods,
          billingInfo,
          shippingInfo,
          receipt,
          sameAsBilling,
        } = checkoutReducer;

        return from(
          makeRequest(
            'order/sendorder',
            'POST',
            JSON.stringify({
              products: cart,
              checkoutInfo: {
                paymentMethod: paymentMethods.find((pm) => pm.checked).id,
                shippingMethod: shippingMethods.find((sm) => sm.checked).id,
                billingInfo,
                shippingInfo,
                receipt,
                sameAsBilling,
              },
              user,
            }),
          ),
        ).pipe(
          concatMap((payload) => {
            if (payload?.error) {
              return [
                setGeneralLoading(false),
                toggleShowAlert({
                  message: transformErrorMessages(payload?.error?.details),
                  type: 'error',
                  show: true,
                }),
              ];
            }

            return [setCanSeeSuccessPage(), navigateToSuccessCheckout()];
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
        );
      },
    ),
  );

const navigateToSuccessCheckoutEpic = (action$) =>
  action$.pipe(
    ofType(navigateToSuccessCheckout.type),
    tap(() => (window.location = './success')),
    ignoreElements(),
  );

const checkOrderInfoEpic = (action$, state$) =>
  action$.pipe(
    ofType(checkOrderInfo.type),
    withLatestFrom(state$),
    concatMap(
      ([
        ,
        {
          checkoutReducer: { billingInfo, shippingInfo, sameAsBilling },
        },
      ]) => {
        const requiredFields = [
          'name',
          'lastName',
          'mobile',
          'address',
          'email',
          'postCode',
        ];

        const billingErrors = requiredFields
          .reduce(
            (acc, curr) => [...acc, billingInfo[curr] === '' ? curr : null],
            [],
          )
          .filter((x) => x !== null);

        const shippingErrors = sameAsBilling
          ? []
          : requiredFields
              .reduce(
                (acc, curr) => [
                  ...acc,
                  shippingInfo[curr] === '' ? curr : null,
                ],
                [],
              )
              .filter((x) => x !== null);

        if (billingErrors.length === 0 && shippingErrors.length === 0) {
          return [
            setCheckoutError({ billingErrors, shippingErrors }),
            setOrderOk(),
            navigateToConfirmPage(),
          ];
        }

        return [setCheckoutError({ billingErrors, shippingErrors })];
      },
    ),
  );

const navigateToConfirmPageEpic = (action$) =>
  action$.pipe(
    ofType(navigateToConfirmPage.type),
    tap(() => (window.location = './confirm')),
    ignoreElements(),
  );

export {
  getPaymentMethodsEpic,
  checkPaymentMethodEpic,
  getShippingMethodsEpic,
  checkShippingMethodEpic,
  sendOrderEpic,
  navigateToSuccessCheckoutEpic,
  checkOrderInfoEpic,
  navigateToConfirmPageEpic,
};

const epics = combineEpics(
  getPaymentMethodsEpic,
  checkPaymentMethodEpic,
  getShippingMethodsEpic,
  checkShippingMethodEpic,
  sendOrderEpic,
  navigateToSuccessCheckoutEpic,
  checkOrderInfoEpic,
  navigateToConfirmPageEpic,
);

export default epics;
