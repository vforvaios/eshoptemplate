import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import catalogReducer from './catalogReducer';
import checkoutReducer from './checkoutReducer';
import counterReducer from './counterReducer';
import homeReducer from './homeReducer';
import wishlistReducer from './wishlistReducer';

const rootReducer = combineReducers({
  counterReducer,
  cartReducer,
  catalogReducer,
  homeReducer,
  wishlistReducer,
  checkoutReducer,
});

export default rootReducer;
