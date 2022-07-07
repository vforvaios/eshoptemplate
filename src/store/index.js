import { configureStore } from '@reduxjs/toolkit';
import rootEpics from 'models/epics/rootEpics';
import cartReducer from 'models/reducers/cartReducer';
import catalogReducer from 'models/reducers/catalogReducer';
import counterReducer from 'models/reducers/counterReducer';
import homeReducer from 'models/reducers/homeReducer';
import userReducer from 'models/reducers/userReducer';
import wishlistReducer from 'models/reducers/wishlistReducer';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleWare = createEpicMiddleware();

const store = configureStore({
  reducer: {
    counterReducer,
    cartReducer,
    catalogReducer,
    homeReducer,
    wishlistReducer,
    userReducer,
  },
  middleware: [epicMiddleWare],
  devTools: process.env.NODE_ENV !== 'production',
});

epicMiddleWare.run(rootEpics);
export default store;
