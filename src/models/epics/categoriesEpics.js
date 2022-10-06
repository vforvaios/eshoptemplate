import makeRequest from 'library/makeRequest';
import { toggleShowAlert } from 'models/actions/alertActions';
import {
  getCategoriesMenu,
  setCategoriesMenu,
} from 'models/actions/categoriesActions';
import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, concatMap, catchError } from 'rxjs/operators';

const getCategoriesMenuEpic = (action$) =>
  action$.pipe(
    ofType(getCategoriesMenu.type),
    mergeMap(() =>
      from(makeRequest('menu', 'GET', '')).pipe(
        concatMap((payload) => {
          const { menu } = payload;
          const distinctCategories = [
            ...new Set(menu?.map((m) => m.category_id)),
          ];

          const newMenu = distinctCategories?.reduce(
            (acc, curr) => [
              ...acc,
              {
                id: menu?.find((m) => m?.category_id === curr)?.category_id,
                name: menu?.find((m) => m?.category_id === curr)?.category_name,
                subCategories: menu?.find((m) => m?.category_id === curr)
                  ?.subcategory_id
                  ? menu
                      .filter((m) => m.category_id === curr)
                      ?.map((s) => ({
                        id: s.subcategory_id,
                        name: s.subcategory_name,
                      }))
                  : [],
              },
            ],
            [],
          );

          return [
            setCategoriesMenu(newMenu),
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
