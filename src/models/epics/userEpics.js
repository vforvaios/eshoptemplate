import { loginUser, setLoggedInUser } from 'models/actions/userActions';
import { ofType, combineEpics } from 'redux-observable';
import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

const loginUserEpic = (action$) =>
  action$.pipe(
    ofType(loginUser.type),
    mergeMap(({ payload }) =>
      from(
        fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }).then((response) => response.json()),
      ),
    ),
    map((payload) => setLoggedInUser(payload)),
  );

export { loginUserEpic };

const epics = combineEpics(loginUserEpic);

export default epics;
