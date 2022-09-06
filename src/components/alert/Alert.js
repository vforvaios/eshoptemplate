import { toggleShowAlert } from 'models/actions/alertActions';
import {
  alertMessage,
  alertType,
  alertShow,
} from 'models/selectors/alertSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Alert = () => {
  const message = useSelector(alertMessage);
  const type = useSelector(alertType);
  const show = useSelector(alertShow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleShowAlert({ message: '', show: false }));
  }, []);

  return <div className={`alert ${type} ${show && 'show'}`}>{message}</div>;
};

export default Alert;
