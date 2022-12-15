import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import {
  getCategoriesMenu,
  setCategoriesMenu,
} from 'models/actions/categoriesActions';
import { setStaticPagesInMenu } from 'models/actions/staticActions';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, concatMap, catchError } from 'rxjs/operators';

const getCategoriesMenuEpic = (action$) =>
  action$.pipe(
    ofType(getCategoriesMenu.type),
    mergeMap(() =>
      from(makeRequest('menu', 'GET', '')).pipe(
        concatMap((payload) => {
          const { menu, staticPagesInMenu } = payload;

          return [
            setCategoriesMenu(menu),
            setStaticPagesInMenu(staticPagesInMenu),
            toggleShowAlert({ message: '', show: false, type: 'error' }),
          ];
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

export { getCategoriesMenuEpic };

const epics = combineEpics(getCategoriesMenuEpic);

export default epics;
