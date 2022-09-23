import { combineEpics } from 'redux-observable';

import cartEpics from './cartEpics';
import catalogEpics from './catalogEpics';
import categoriesEpics from './categoriesEpics';
import checkoutEpics from './checkoutEpics';
import { counterIncreaseEpic } from './counterEpics';
import homeEpics from './homeEpics';
import userEpics from './userEpics';
import wishlistEpics from './wishlistEpics';

const rootEpics = combineEpics(
  counterIncreaseEpic,
  userEpics,
  cartEpics,
  wishlistEpics,
  categoriesEpics,
  checkoutEpics,
  homeEpics,
  catalogEpics,
);

export default rootEpics;
