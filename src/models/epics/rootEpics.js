import { combineEpics } from 'redux-observable';

import cartEpics from './cartEpics';
import { counterIncreaseEpic } from './counterEpics';
import userEpics from './userEpics';
import wishlistEpics from './wishlistEpics';

const rootEpics = combineEpics(
  counterIncreaseEpic,
  userEpics,
  cartEpics,
  wishlistEpics,
);

export default rootEpics;
