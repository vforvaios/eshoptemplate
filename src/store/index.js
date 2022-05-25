import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from 'models/reducers/rootReducer';
import rootEpics from 'models/epics/rootEpics';

const epicMiddleWare = createEpicMiddleware();

const store = configureStore({
  reducer: { rootReducer },
  middleware: [epicMiddleWare],
  devTools: process.env.NODE_ENV !== 'production',
});
epicMiddleWare.run(rootEpics);
export default store;
