import { increaseCounter } from 'models/actions/types';

const initialState = {
  counter: 0,
  message: '',
  users: [],
  todos: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increaseCounter:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
