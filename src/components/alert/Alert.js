import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
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

  // return <div className={`alert ${type} ${show && 'show'}`}>{message}</div>;
  return (
    <Snackbar
      open={show}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={Number(process.env.REACT_APP_CLOSE_ALERT)}
      onClose={() => dispatch(toggleShowAlert({ message: '', show: false }))}>
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={() => dispatch(toggleShowAlert({ message: '', show: false }))}
        severity={type}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
