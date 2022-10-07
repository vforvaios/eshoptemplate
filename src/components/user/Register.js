import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const submitRegisterForm = () => {
    if (email === '') {
      setEmailError('Πρέπει να συμπληρώσετε email!');
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('Πρέπει να συμπληρώσετε κωδικό!');
    } else {
      setPasswordError('');
    }

    if (confirmPassword === '' || confirmPassword !== password) {
      setConfirmPasswordError(
        'Πρέπει να συμπληρώσετε κωδικό ή δεν ταιριάζουν οι 2 κωδικοί!',
      );
    } else {
      setConfirmPasswordError('');
    }

    if (
      email !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      password === confirmPassword
    ) {
      alert('ΕΠΙΤΥΧΗΣ ΕΓΓΡΑΦΗ');
    }
  };

  return (
    <div className="content user">
      <div className="row">
        <div className="wrapper">
          <div className="page-title text-center">
            <h1>ΕΓΓΡΑΦΗ</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="login-container">
            <div className="form-control">
              <FormControl fullWidth>
                <InputLabel htmlFor="login-email">ΟΝΟΜΑ ΧΡΗΣΤΗ</InputLabel>
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
                <InputLabel htmlFor="login-password">ΚΩΔΙΚΟΣ</InputLabel>
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
                  ΕΠΙΒΕΒΑΙΩΣΗ ΚΩΔΙΚΟΥ
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
              <div className="actions">
                <button className="button next" onClick={submitRegisterForm}>
                  ΕΓΓΡΑΦΗ
                </button>
                <Link className="button next mrl12" to="/login">
                  ΕΙΣΟΔΟΣ
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
