// import axios from 'axios'
import { ofType } from 'redux-observable';
import { mapTo, delay } from 'rxjs/operators';

const counterIncreaseEpic = (action$) =>
  action$.pipe(
    // or  = action$ = action$.pipe(
    ofType('INCREASE'),
    delay(1000),
    mapTo({ type: 'COUNTER_INCREASED' }),
  );

// const counterDecreaseEpic = pipe( // or  = action$ = action$.pipe(
//   ofType('DECREASE'),
//   delay(1000),
//   mapTo({ type: 'COUNTER_DECREASED' })
// )

// const fetchUsersEpic = pipe(
//   ofType('FETCH_USERS'),
//   mergeMap( () =>
//     from(axios.get('https://jsonplaceholder.typicode.com/users'))
//       .pipe(map(response => fetchUsersSuccessful(response.data)))
//   )
// )

export { counterIncreaseEpic };
