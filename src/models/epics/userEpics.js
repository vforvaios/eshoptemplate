import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import { setGeneralLoading } from 'models/actions/catalogActions';
import {
  loginUser,
  setLoggedInUser,
  logoutUser,
  registerUser,
  addNewsletterUser,
  getMyOrders,
  setMyOrders,
  getOrdersStatuses,
  setOrderStatuses,
  setCurrentOrdersPage,
  getOrderDetails,
  setOrderDetails,
} from 'models/actions/userActions';
import { token, currentOrderPage } from 'models/selectors/userSelector';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, concatMap, catchError, map } from 'rxjs/operators';

const getOrdersStatusesEpic = (action$, state$) =>
  action$.pipe(
    ofType(getOrdersStatuses.type),
    mergeMap(() =>
      from(makeRequest('statuses/admin', 'GET', '', token(state$.value))).pipe(
        concatMap(({ data }) => {
          return [setOrderStatuses(data), getMyOrders()];
        }),
        catchError((error) =>
          of(
            toggleShowAlert({
              message: `${error}`,
              show: true,
              type: 'error',
            }),
            setGeneralLoading(false),
          ),
        ),
      ),
    ),
  );

const loginUserEpic = (action$) =>
  action$.pipe(
    ofType(loginUser.type),
    mergeMap(({ payload }) =>
      from(makeRequest('login', 'POST', JSON.stringify(payload))).pipe(
        concatMap((payload) => [
          setGeneralLoading(false),
          setLoggedInUser(payload),
          toggleShowAlert({ message: '', show: false, type: 'error' }),
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
      ),
    ),
  );

const logoutUserEpic = (action$) =>
  action$.pipe(
    ofType(logoutUser.type),
    map(() => setLoggedInUser({})),
  );

const addNewsletterUserEpic = (action$) =>
  action$.pipe(
    ofType(addNewsletterUser.type),
    mergeMap(({ payload }) =>
      from(
        makeRequest(
          'newsletter/add',
          'POST',
          JSON.stringify({ email: payload }),
        ),
      ).pipe(
        concatMap((payload) => {
          if (payload?.error) {
            return [
              setGeneralLoading(false),
              toggleShowAlert({
                message: `${payload.error.details[0].message}`,
                type: 'error',
                show: true,
              }),
            ];
          }

          return [
            setGeneralLoading(false),
            toggleShowAlert({
              message: `${payload.message}`,
              type: 'success',
              show: true,
            }),
          ];
        }),
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
      ),
    ),
  );

const registerUserEpic = (action$) =>
  action$.pipe(
    ofType(registerUser.type),
    mergeMap(({ payload }) =>
      from(makeRequest('register', 'POST', JSON.stringify(payload))).pipe(
        map((payload) => {}),
      ),
    ),
  );

const getMyOrdersEpic = (action$, state$) =>
  action$.pipe(
    ofType(getMyOrders.type, setCurrentOrdersPage.type),
    mergeMap(() =>
      from(
        makeRequest(
          `order/admin/userorders?page=${currentOrderPage(state$.value)}`,
          'GET',
          '',
          token(state$.value),
        ),
      ).pipe(
        concatMap(({ orders, total }) => [
          setMyOrders({ results: orders, total }),
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
      ),
    ),
  );

const getOrderDetailsEpic = (action$, state$) =>
  action$.pipe(
    ofType(getOrderDetails.type),
    mergeMap(({ payload }) =>
      from(
        makeRequest(
          `order/admin/order/${payload}`,
          'GET',
          '',
          token(state$.value),
        ),
      ).pipe(
        concatMap(({ order, pastStatuses, products }) => {
          const payload = {
            pastStatuses,
            order,
            products: products?.map((product) => ({
              ...product,
              total: Number(product.items),
              totalPrice: Number(product?.items) * product?.price,
            })),
          };

          return [setOrderDetails(payload), setGeneralLoading(false)];
        }),
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
      ),
    ),
  );

export {
  loginUserEpic,
  logoutUserEpic,
  registerUserEpic,
  addNewsletterUserEpic,
  getMyOrdersEpic,
  getOrdersStatusesEpic,
  getOrderDetailsEpic,
};

const epics = combineEpics(
  loginUserEpic,
  logoutUserEpic,
  registerUserEpic,
  addNewsletterUserEpic,
  getMyOrdersEpic,
  getOrdersStatusesEpic,
  getOrderDetailsEpic,
);

export default epics;
