import { configureStore } from '@reduxjs/toolkit';
import rootEpics from 'models/epics/rootEpics';
import alertReducer from 'models/reducers/alertReducer';
import cartReducer from 'models/reducers/cartReducer';
import catalogReducer from 'models/reducers/catalogReducer';
import categoriesReducer from 'models/reducers/categoriesReducer';
import checkoutReducer from 'models/reducers/checkoutReducer';
import counterReducer from 'models/reducers/counterReducer';
import homeReducer from 'models/reducers/homeReducer';
import loaderReducer from 'models/reducers/loaderReducer';
import staticReducer from 'models/reducers/staticReducer';
import userReducer from 'models/reducers/userReducer';
import wishlistReducer from 'models/reducers/wishlistReducer';
import { combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'state',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    alertReducer,
    counterReducer,
    cartReducer,
    catalogReducer,
    homeReducer,
    loaderReducer,
    wishlistReducer,
    userReducer,
    categoriesReducer,
    checkoutReducer,
    staticReducer,
  }),
);

const epicMiddleWare = createEpicMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: [epicMiddleWare],
  devTools: process.env.NODE_ENV !== 'production',
});

epicMiddleWare.run(rootEpics);
export default store;
