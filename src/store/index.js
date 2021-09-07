import { createStore /*, applyMiddleware */ } from 'redux'
// import { createEpicMiddleware } from 'redux-observable'
// import rootReducer from '../reducers/rootReducer'
// import rootEpic from '../epics/rootEpic'

// const epicMiddleWare = createEpicMiddleware()

// const store = createStore(rootReducer, applyMiddleware(epicMiddleWare))
const store = createStore(() => {} /*, applyMiddleware(epicMiddleWare) */)
// epicMiddleWare.run(rootEpic)
export default store