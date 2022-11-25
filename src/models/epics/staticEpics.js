import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import {
  getStaticContent,
  setStaticContent,
} from 'models/actions/staticActions';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, concatMap, catchError } from 'rxjs/operators';

const getStaticContentEpic = (action$, state$) =>
  action$.pipe(
    ofType(getStaticContent.type),
    mergeMap(() =>
      from(makeRequest('staticcontent/active', 'GET', '')).pipe(
        concatMap((payload) => [
          setStaticContent(payload.data),
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

export { getStaticContentEpic };

const epics = combineEpics(getStaticContentEpic);

export default epics;
