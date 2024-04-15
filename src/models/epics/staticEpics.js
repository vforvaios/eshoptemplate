import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import {
  getStaticContent,
  setStaticContent,
  getKeyWords,
  setKeyWords,
  getBusinessDetails,
  setBusinessDetails,
  getSocialLinks,
  setSocialLinks,
} from 'models/actions/staticActions';
import { ofType, combineEpics } from 'redux-observable';
import { from } from 'rxjs';
import { mergeMap, concatMap } from 'rxjs/operators';

import catchErrorOperator from './operators/catchErrorOperator';

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
        catchErrorOperator(false),
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
        catchErrorOperator(false),
      ),
    ),
  );

const getBusinessDetailsEpic = (action$, state$) =>
  action$.pipe(
    ofType(getBusinessDetails.type),
    mergeMap(() =>
      from(makeRequest('staticcontent/businessdetails', 'GET', '')).pipe(
        concatMap((payload) => [
          setBusinessDetails(payload.data),
          toggleShowAlert({ message: '', show: false, type: 'error' }),
        ]),
        catchErrorOperator(false),
      ),
    ),
  );

const getSocialLinksEpic = (action$, state$) =>
  action$.pipe(
    ofType(getSocialLinks.type),
    mergeMap(() =>
      from(makeRequest('staticcontent/sociallinks', 'GET', '')).pipe(
        concatMap((payload) => [
          setSocialLinks(payload.data),
          toggleShowAlert({ message: '', show: false, type: 'error' }),
        ]),
        catchErrorOperator(false),
      ),
    ),
  );

export { getStaticContentEpic, getKeyWordsEpic, getBusinessDetailsEpic };

const epics = combineEpics(
  getStaticContentEpic,
  getKeyWordsEpic,
  getBusinessDetailsEpic,
  getSocialLinksEpic,
);

export default epics;
