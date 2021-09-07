import { increase_counter } from 'models/actions/types';
const initialState = {
  counter: 0,
  message: '',
  users: [],
  todos: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increase_counter:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
