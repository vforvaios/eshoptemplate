import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import {
  getStaticContent,
  setStaticContent,
  getKeyWords,
  setKeyWords,
} from 'models/actions/staticActions';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, concatMap, catchError } from 'rxjs/operators';

const getKeyWordsEpic = (action$) =>
  action$.pipe(
    ofType(getKeyWords.type),
    mergeMap(({ payload }) =>
      from(makeRequest(`staticcontent/keywords/${payload}`)).pipe(
        concatMap((payload) => {
          if (payload?.error) {
            return [
              toggleShowAlert({
                message: `${payload?.error}`,
                type: 'error',
                show: true,
              }),
            ];
          }

          return [setKeyWords(payload?.keywords)];
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

export { getStaticContentEpic, getKeyWordsEpic };

const epics = combineEpics(getStaticContentEpic, getKeyWordsEpic);

export default epics;
