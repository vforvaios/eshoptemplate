import { createAction } from '@reduxjs/toolkit';

const increaseCounterAction = createAction('counter/increaseCounter');

export { increaseCounterAction };
