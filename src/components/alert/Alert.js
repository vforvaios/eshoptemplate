import {
  alertMessage,
  alertType,
  alertShow,
} from 'models/selectors/alertSelectors';
import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
  const message = useSelector(alertMessage);
  const type = useSelector(alertType);
  const show = useSelector(alertShow);

  return <div className={`alert ${type} ${show && 'show'}`}>{message}</div>;
};

export default Alert;
