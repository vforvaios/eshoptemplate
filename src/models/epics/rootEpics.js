import { combineEpics } from 'redux-observable'
import { counterIncreaseEpic } from './counterEpics'

const rootEpics = combineEpics(
  counterIncreaseEpic,
)

export default rootEpics