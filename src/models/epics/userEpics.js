import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import { toggleLoader } from 'models/actions/loaderActions';
import {
  loginUser,
  setLoggedInUser,
  logoutUser,
  registerUser,
} from 'models/actions/userActions';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, concatMap, catchError, map } from 'rxjs/operators';

const loginUserEpic = (action$) =>
  action$.pipe(
    ofType(loginUser.type),
    mergeMap(({ payload }) =>
      from(makeRequest('login', 'POST', JSON.stringify(payload))).pipe(
        concatMap((payload) => [
          toggleLoader(false),
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
            toggleLoader(false),
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

const registerUserEpic = (action$) =>
  action$.pipe(
    ofType(registerUser.type),
    mergeMap(({ payload }) =>
      from(makeRequest('register', 'POST', JSON.stringify(payload))).pipe(
        map((payload) => {}),
      ),
    ),
  );

export { loginUserEpic, logoutUserEpic, registerUserEpic };

const epics = combineEpics(loginUserEpic, logoutUserEpic, registerUserEpic);

export default epics;
