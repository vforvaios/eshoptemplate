import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { setGeneralLoading } from 'models/actions/catalogActions';
import { unsubscribe } from 'models/actions/userActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const UnSubscribeNewsletter = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const dispatch = useDispatch();

  const submitUnsubscribeForm = () => {
    if (email === '') {
      setEmailError('You have to fill in your email!');
    } else {
      setEmailError('');
    }

    if (email !== '') {
      dispatch(setGeneralLoading(true));
      dispatch(unsubscribe({ email }));
    }
  };

  return (
    <div className="content unsubscribe">
      <div className="row">
        <div className="wrapper">
          <div className="login-container">
            <h1 className="page-title">UNSUBSCRIBE NEWSLETTER</h1>
            <div className="form-control">
              <FormControl fullWidth>
                <InputLabel htmlFor="unsubscribe-email">EMAIL</InputLabel>
                <Input
                  fullWidth
                  id="unsubscribe-email"
                  type="email"
                  value={email}
                  error={emailError !== ''}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError !== '' && (
                  <span className="error-span">{emailError}</span>
                )}
              </FormControl>
            </div>
            <div className="form-control">
              <div className="actions">
                <button className="button next" onClick={submitUnsubscribeForm}>
                  UNSUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnSubscribeNewsletter;
