import { increaseCounter } from './types';

const increaseCounterAction = () => ({
  type: increaseCounter,
  payload: 1,
});

export { increaseCounterAction };
