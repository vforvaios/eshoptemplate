import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import { setCart, navigateBackToCart } from 'models/actions/cartActions';
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
  setUpdatedProducts,
  updateCartProducts,
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
            if (payload?.updatedProducts) {
              return [
                toggleShowAlert({
                  message: payload?.updatedProducts,
                  type: 'error',
                  show: true,
                }),
                setUpdatedProducts(true),
                setGeneralLoading(false),
              ];
            }

            if (payload?.error) {
              return [
                setGeneralLoading(false),
                toggleShowAlert({
                  message: `${payload?.error}`,
                  type: 'error',
                  show: true,
                }),
              ];
            }

            return [
              setGeneralLoading(false),
              setCanSeeSuccessPage(),
              navigateToSuccessCheckout(),
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

const updateCartProductsEpic = (action$, state$) =>
  action$.pipe(
    ofType(updateCartProducts.type),
    withLatestFrom(state$),
    mergeMap(
      ([
        ,
        {
          cartReducer: { cart },
        },
      ]) => {
        const productIds = cart?.map((prod) => prod?.productId).join(',');

        return from(
          makeRequest(
            `products/updated/prods?products=${productIds}`,
            'GET',
            '',
          ),
        ).pipe(
          concatMap(({ products }) => {
            const newCart = products?.map((product) => ({
              ...product,
              initialPrice: product?.initialPrice,
              price: product?.price,
              total:
                product?.stock === 0
                  ? 0
                  : product?.stock <
                    cart?.find((pr) => pr?.productId === product?.productId)
                      ?.total
                  ? cart?.find((pr) => pr?.productId === product?.productId)
                      ?.total
                  : 1,
            }));

            return [
              setCart(newCart),
              toggleShowAlert({
                message: `Ενημερώθηκαν οι τιμές και τα stock των items.`,
                type: 'success',
                show: true,
              }),
              newCart?.filter((pr) => pr?.total === 0)?.length === 0 &&
                setUpdatedProducts(false),
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
        );
      },
    ),
  );

const navigateBackToCartEpic = (action$) =>
  action$.pipe(
    ofType(navigateBackToCart.type),
    tap(() => (window.location = '../cart')),
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
  updateCartProductsEpic,
  navigateBackToCartEpic,
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
  updateCartProductsEpic,
  navigateBackToCartEpic,
);

export default epics;
