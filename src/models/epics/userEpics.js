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
} from 'models/actions/userActions';
import { token } from 'models/selectors/userSelector';
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
    ofType(getMyOrders.type),
    mergeMap(() =>
      from(
        makeRequest(`order/admin/userorders`, 'GET', '', token(state$.value)),
      ).pipe(
        concatMap(({ orders }) => [
          setMyOrders(orders),
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

export {
  loginUserEpic,
  logoutUserEpic,
  registerUserEpic,
  addNewsletterUserEpic,
  getMyOrdersEpic,
  getOrdersStatusesEpic,
};

const epics = combineEpics(
  loginUserEpic,
  logoutUserEpic,
  registerUserEpic,
  addNewsletterUserEpic,
  getMyOrdersEpic,
  getOrdersStatusesEpic,
);

export default epics;
