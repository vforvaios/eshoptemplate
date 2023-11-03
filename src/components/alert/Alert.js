/* eslint-disable react-hooks/exhaustive-deps */
import Toast from 'react-bootstrap/Toast';
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

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        dispatch(toggleShowAlert({ message: '', show: false }));
      }, process.env.REACT_APP_CLOSE_ALERT);
    }
  }, [show]);

  return (
    <Toast
      show={show}
      bg={type}
      onClose={() => dispatch(toggleShowAlert({ message: '', show: false }))}>
      {message}
    </Toast>
  );
};

export default Alert;
