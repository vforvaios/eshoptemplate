import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from 'models/reducers/rootReducer';
import rootEpics from 'models/epics/rootEpics';

const epicMiddleWare = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleWare));
epicMiddleWare.run(rootEpics);
export default store;
