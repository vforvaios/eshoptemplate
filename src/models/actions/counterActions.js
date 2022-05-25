import { createAction } from '@reduxjs/toolkit';

const increaseCounterAction = createAction('counter/increaseCounter');
const decreaseCounterAction = createAction('counter/decreaseCounter');

export { increaseCounterAction, decreaseCounterAction };
