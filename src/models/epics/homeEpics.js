import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import { setGeneralLoading } from 'models/actions/catalogActions';
import { getHomePageData, setHomePageData } from 'models/actions/homeActions';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, concatMap, catchError } from 'rxjs/operators';

// TODO - NOT USED AT THE MOMENT
const getHomePageDataEpic = (action$) =>
  action$.pipe(
    ofType(getHomePageData.type),
    mergeMap(() =>
      from(makeRequest('home', 'GET', '')).pipe(
        concatMap((payload) => {
          const newPayload = {
            ...payload,
            tabsOffers: payload?.tabsOffers?.map((offer, index) => ({
              ...offer,
              index,
            })),
          };

          return [
            setHomePageData(newPayload),
            toggleShowAlert({ message: '', show: false, type: 'error' }),
            setGeneralLoading(false),
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

export { getHomePageDataEpic };

const epics = combineEpics(getHomePageDataEpic);

export default epics;
