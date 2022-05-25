import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import counterReducer from 'models/reducers/counterReducer';
import rootEpics from 'models/epics/rootEpics';

const epicMiddleWare = createEpicMiddleware();

const store = configureStore({
  reducer: { counterReducer },
  middleware: [epicMiddleWare],
  devTools: process.env.NODE_ENV !== 'production',
});
epicMiddleWare.run(rootEpics);
export default store;
