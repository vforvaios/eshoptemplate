/* eslint-disable react-hooks/exhaustive-deps */
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import SEO from 'components/seo/SEO';
import { getKeyWords } from 'models/actions/staticActions';
import { registerUser } from 'models/actions/userActions';
import { keywords } from 'models/selectors/staticSelectors';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [dateError, setDateError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const dispatch = useDispatch();
  const pageKeywords = useSelector(keywords);

  const submitRegisterForm = () => {
    if (username === '') {
      setUsernameError('You have to fill in your username!');
    } else {
      setUsernameError('');
    }

    if (email === '') {
      setEmailError('You have to fill in your email!');
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('You have to fill in your password!');
    } else {
      setPasswordError('');
    }

    if (confirmPassword === '' || confirmPassword !== password) {
      setConfirmPasswordError(
        'You have to fill in your password or the passwords do not match.',
      );
    } else {
      setConfirmPasswordError('');
    }

    if (
      email !== '' &&
      username !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      password === confirmPassword
    ) {
      dispatch(
        registerUser({
          username,
          email,
          password,
          confirmPassword,
          birthDate: birthDate || '',
        }),
      );
    }
  };

  useEffect(() => {
    dispatch(getKeyWords('register'));
  }, []);

  return (
    <div className="content user">
      <SEO
        title={`${process.env.REACT_APP_WEBSITE_NAME} register`}
        description={pageKeywords}
        name={process.env.REACT_APP_WEBSITE_NAME}
        type="article"
      />
      <div className="row">
        <div className="wrapper">
          <div className="text-center">
            <h1 className="page-title">REGISTER</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="login-container">
            <div className="form-control">
              <FormControl fullWidth>
                <InputLabel htmlFor="login-username">Username</InputLabel>
                <Input
                  fullWidth
                  id="login-username"
                  type="text"
                  value={username}
                  error={usernameError !== ''}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {usernameError !== '' && (
                  <span className="error-span">{usernameError}</span>
                )}
              </FormControl>
            </div>
            <div className="form-control">
              <FormControl fullWidth>
                <InputLabel htmlFor="login-email">Email</InputLabel>
                <Input
                  fullWidth
                  id="login-email"
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
              <FormControl fullWidth>
                <InputLabel htmlFor="login-password">Password</InputLabel>
                <Input
                  fullWidth
                  error={passwordError !== ''}
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError !== '' && (
                  <span className="error-span">{passwordError}</span>
                )}
              </FormControl>
            </div>
            <div className="form-control">
              <FormControl fullWidth>
                <InputLabel htmlFor="login-confirmpassword">
                  Confirm password
                </InputLabel>
                <Input
                  fullWidth
                  error={confirmPasswordError !== ''}
                  id="login-confirmpassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPasswordError !== '' && (
                  <span className="error-span">{confirmPasswordError}</span>
                )}
              </FormControl>
            </div>
            <div className="form-control">
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Birthdate"
                    value={birthDate}
                    onChange={(newValue, context) => {
                      if (context.validationError !== null) {
                        setDateError(true);
                      } else {
                        setDateError(false);
                      }
                      setBirthDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </FormControl>
            </div>
            <div className="form-control">
              <div className="actions">
                <button
                  disabled={dateError}
                  className="button next"
                  onClick={submitRegisterForm}>
                  Register
                </button>
                <Link className="button next mrl12" to="/login">
                  Go To Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
