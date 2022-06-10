import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import catalogReducer from './catalogReducer';
import counterReducer from './counterReducer';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  counterReducer,
  cartReducer,
  catalogReducer,
  homeReducer,
});

export default rootReducer;
