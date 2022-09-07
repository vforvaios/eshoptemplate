import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import { toggleLoader } from 'models/actions/loaderActions';
import { loginUser, setLoggedInUser } from 'models/actions/userActions';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, concatMap, catchError } from 'rxjs/operators';

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

export { loginUserEpic };

const epics = combineEpics(loginUserEpic);

export default epics;