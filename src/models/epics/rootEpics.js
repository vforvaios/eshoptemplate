import { combineEpics } from 'redux-observable';

import cartEpics from './cartEpics';
import { counterIncreaseEpic } from './counterEpics';
import userEpics from './userEpics';

const rootEpics = combineEpics(counterIncreaseEpic, userEpics, cartEpics);

export default rootEpics;
