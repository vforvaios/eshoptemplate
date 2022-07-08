import makeRequest from 'library/makeRequest';
import { loginUser, setLoggedInUser } from 'models/actions/userActions';
import { ofType, combineEpics } from 'redux-observable';
import { map } from 'rxjs/operators';

const loginUserEpic = (action$) =>
  action$.pipe(
    ofType(loginUser.type),
    makeRequest(({ payload }) => ({
      url: 'http://localhost:8000/api/login',
      method: 'POST',
      body: JSON.stringify(payload),
    })),
    map((payload) => setLoggedInUser(payload)),
  );

export { loginUserEpic };

const epics = combineEpics(loginUserEpic);

export default epics;
