import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { setGeneralLoading } from 'models/actions/catalogActions';
import { addNewsletterUser } from 'models/actions/userActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const NewsletterForm = () => {
  const dispatch = useDispatch();

  const [newsletterEmail, setNewsletterEmail] = useState('');

  return (
    <>
      <div className="title">NEWSLETTER</div>
      <div>
        <FormControl fullWidth className="newsletter-form">
          <InputLabel htmlFor="newsletter">Your email</InputLabel>
          <Input
            fullWidth
            id="newsletter"
            type="email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
          />
          <button
            className="button"
            onClick={() => {
              dispatch(setGeneralLoading(true));
              dispatch(addNewsletterUser(newsletterEmail));
            }}>
            Subscribe
          </button>
        </FormControl>
      </div>
    </>
  );
};

export default NewsletterForm;
