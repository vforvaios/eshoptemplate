import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { toggleLoader } from 'models/actions/loaderActions';
import { loginUser } from 'models/actions/userActions';
import { user } from 'models/selectors/userSelector';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSelector = useSelector(user);

  const submitLoginForm = () => {
    if (email === '') {
      setEmailError('Blank email is not permitted!');
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('Blank password is not permitted!');
    } else {
      setPasswordError('');
    }

    if (email !== '' && password !== '') {
      const data = { username: email, password };

      dispatch(toggleLoader(true));
      dispatch(loginUser(data));
    }
  };

  useEffect(() => {
    userSelector?.token && navigate('/');
  }, [userSelector.token, navigate]);

  return (
    <div className="content user">
      <div className="row">
        <div className="wrapper">
          <div className="page-title text-center">
            <h1>Login</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="login-container">
            <div className="form-control">
              <FormControl fullWidth>
                <InputLabel htmlFor="login-email">Username</InputLabel>
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
              <div className="actions separate">
                <Button className="button green" onClick={submitLoginForm}>
                  LOGIN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
