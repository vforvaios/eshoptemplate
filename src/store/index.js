import { configureStore } from '@reduxjs/toolkit';
import rootEpics from 'models/epics/rootEpics';
import counterReducer from 'models/reducers/counterReducer';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleWare = createEpicMiddleware();

const store = configureStore({
  reducer: { counterReducer },
  middleware: [epicMiddleWare],
  devTools: process.env.NODE_ENV !== 'production',
});

epicMiddleWare.run(rootEpics);
export default store;
