import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseCounterAction,
  decreaseCounterAction,
} from 'models/actions/counterActions';
import { counter } from 'models/selectors/counterSelectors';

const About = () => {
  const dispatch = useDispatch();
  const returnedCounter = useSelector(counter);

  return (
    <div>
      <div>About</div>
      {returnedCounter}
      <button type="button" onClick={() => dispatch(increaseCounterAction(1))}>
        IncreaseCounter
      </button>
      <button type="button" onClick={() => dispatch(decreaseCounterAction())}>
        InvokeDecreaseCounter
      </button>
    </div>
  );
};

export default About;
