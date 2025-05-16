/* eslint-disable react-hooks/exhaustive-deps */
import FormControl from '@mui/material/FormControl';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import SEO from '@/components/seo/SEO';
import { setGeneralLoading } from '@/models/actions/catalogActions';
import { getKeyWords } from '@/models/actions/staticActions';
import { loginUser } from '@/models/actions/userActions';
import { keywords } from '@/models/selectors/staticSelectors';
import { user } from '@/models/selectors/userSelector';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSelector = useSelector(user);
  const pageKeywords = useSelector(keywords);

  const submitLoginForm = () => {
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

    if (email !== '' && password !== '') {
      const data = { username: email, password };

      dispatch(setGeneralLoading(true));
      dispatch(loginUser(data));
    }
  };

  useEffect(() => {
    dispatch(setGeneralLoading(false));
    dispatch(getKeyWords('login'));
    userSelector?.token && navigate('/');
  }, [userSelector.token, navigate]);

  return (
    <div className="content user">
      <SEO
        title={`${import.meta.env.VITE_WEBSITE_NAME} login`}
        description={pageKeywords}
        name={import.meta.env.VITE_WEBSITE_NAME}
        type="article"
      />
      <div className="row">
        <div className="wrapper">
          <div className="login-container">
            <div className=" text-center">
              <h1 className="page-title">LOGIN</h1>
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
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  endAdornment={
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end">
                      <Icon>
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </Icon>
                    </IconButton>
                  }
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError !== '' && (
                  <span className="error-span">{passwordError}</span>
                )}
              </FormControl>
            </div>
            <div className="form-control">
              <div className="actions login-actions separate">
                <Link className="minor-link mrl12" to="/forgotpassword">
                  Forgot my password
                </Link>
                <div>
                  <button className="button next" onClick={submitLoginForm}>
                    Login
                  </button>
                  <Link className="button next mrl12" to="/register">
                    Go To Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
