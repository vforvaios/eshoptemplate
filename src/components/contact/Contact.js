/* eslint-disable react-hooks/exhaustive-deps */
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import SEO from 'components/seo/SEO';
import { setGeneralLoading } from 'models/actions/catalogActions';
import { getKeyWords } from 'models/actions/staticActions';
import { sendContactForm } from 'models/actions/userActions';
import { keywords } from 'models/selectors/staticSelectors';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Contact = () => {
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [firstnameError, setFirstnameError] = useState('');
  const [surnameError, setSurnameError] = useState('');
  const [contactState, setContactState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const dispatch = useDispatch();
  const pageKeywords = useSelector(keywords);

  const handleContactState = (e, contactKey) => {
    setContactState({ ...contactState, [contactKey]: e.target.value });
  };

  useEffect(() => {
    dispatch(getKeyWords('contact'));
  }, []);

  const submitContactForm = () => {
    if (contactState?.firstName === '') {
      setFirstnameError('You have to fill in your first name!');
    } else {
      setFirstnameError('');
    }

    if (contactState?.lastName === '') {
      setSurnameError('You have to fill in your surname!');
    } else {
      setSurnameError('');
    }

    if (contactState?.email === '') {
      setEmailError('You have to fill in your email!');
    } else {
      setEmailError('');
    }

    if (contactState?.message === '') {
      setMessageError('You have to fill in your message!');
    } else {
      setMessageError('');
    }

    if (
      contactState.email !== '' &&
      contactState.firstName !== '' &&
      contactState.lastName !== '' &&
      contactState.message !== ''
    ) {
      dispatch(setGeneralLoading(true));
      dispatch(sendContactForm(contactState));
    }
  };

  return (
    <div className="content contact-page">
      <SEO
        title={`${process.env.REACT_APP_WEBSITE_NAME} contact`}
        description={pageKeywords}
        name={process.env.REACT_APP_WEBSITE_NAME}
        type="article"
      />
      <div className="row">
        <div className="wrapper">
          <div className="text-center">
            <h1 className="page-title">CONTACT</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="form-control">
            <FormControl>
              <InputLabel htmlFor="firstName">NAME</InputLabel>
              <Input
                id="firstName"
                type="text"
                error={Boolean(firstnameError)}
                value={contactState.firstName}
                onChange={(e) => handleContactState(e, 'firstName')}
              />
              {firstnameError !== '' && (
                <span className="error-span">{firstnameError}</span>
              )}
            </FormControl>
          </div>
          <div className="form-control">
            <FormControl>
              <InputLabel htmlFor="lastName">SURNAME</InputLabel>
              <Input
                id="lastName"
                type="text"
                error={Boolean(surnameError)}
                value={contactState.lastName}
                onChange={(e) => handleContactState(e, 'lastName')}
              />
              {surnameError !== '' && (
                <span className="error-span">{surnameError}</span>
              )}
            </FormControl>
          </div>
          <div className="form-control">
            <FormControl>
              <InputLabel htmlFor="email">EMAIL</InputLabel>
              <Input
                id="email"
                type="email"
                error={Boolean(emailError)}
                value={contactState.email}
                onChange={(e) => handleContactState(e, 'email')}
              />
              {emailError !== '' && (
                <span className="error-span">{emailError}</span>
              )}
            </FormControl>
          </div>
          <div className="form-control">
            <FormControl>
              <InputLabel htmlFor="message">MESSAGE</InputLabel>
              <Input
                id="message"
                type="text"
                error={Boolean(messageError)}
                rows="7"
                multiline
                value={contactState.message}
                onChange={(e) => handleContactState(e, 'message')}
              />
              {messageError !== '' && (
                <span className="error-span">{messageError}</span>
              )}
            </FormControl>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="actions">
            <button className="button next" onClick={submitContactForm}>
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
