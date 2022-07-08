import { combineEpics } from 'redux-observable';

import { counterIncreaseEpic } from './counterEpics';
import userEpics from './userEpics';

const rootEpics = combineEpics(counterIncreaseEpic, userEpics);

export default rootEpics;
