import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounterAction } from 'models/actions/counterActions';

const About = () => {
  const dispatch = useDispatch();
  const counter = useSelector(({ counterReducer }) => counterReducer?.counter);
  return (
    <div>
      <div>About</div>
      {counter}
      <button type="button" onClick={() => dispatch(increaseCounterAction())}>
        IncreaseCounter
      </button>
    </div>
  );
};

export default About;
