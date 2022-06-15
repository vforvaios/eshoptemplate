import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import catalogReducer from './catalogReducer';
import counterReducer from './counterReducer';
import homeReducer from './homeReducer';
import wishlistReducer from './wishlistReducer';

const rootReducer = combineReducers({
  counterReducer,
  cartReducer,
  catalogReducer,
  homeReducer,
  wishlistReducer,
});

export default rootReducer;
