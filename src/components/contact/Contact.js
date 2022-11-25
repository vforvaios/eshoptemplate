import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import SEO from 'components/seo/SEO';
import React, { useState } from 'react';

const Contact = () => {
  const [contactState, setContactState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleContactState = (e, contactKey) => {
    setContactState({ ...contactState, [contactKey]: e.target.value });
  };

  return (
    <div className="content contact-page">
      <SEO
        title="Shoppy contact"
        description="Shoppy contact page"
        name="Shoppy"
        type="article"
      />
      <div className="row">
        <div className="wrapper">
          <div className="text-center">
            <h1 className="page-title">Επικοινωνία</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="form-control">
            <FormControl>
              <InputLabel htmlFor="firstName">ΟΝΟΜΑ</InputLabel>
              <Input
                id="firstName"
                type="text"
                value={contactState.firstName}
                onChange={(e) => handleContactState(e, 'firstName')}
              />
            </FormControl>
          </div>
          <div className="form-control">
            <FormControl>
              <InputLabel htmlFor="lastName">ΕΠΩΝΥΜΟ</InputLabel>
              <Input
                id="lastName"
                type="text"
                value={contactState.lastName}
                onChange={(e) => handleContactState(e, 'lastName')}
              />
            </FormControl>
          </div>
          <div className="form-control">
            <FormControl>
              <InputLabel htmlFor="email">EMAIL</InputLabel>
              <Input
                id="email"
                type="email"
                value={contactState.email}
                onChange={(e) => handleContactState(e, 'email')}
              />
            </FormControl>
          </div>
          <div className="form-control">
            <FormControl>
              <InputLabel htmlFor="message">ΜΗΝΥΜΑ</InputLabel>
              <Input
                id="message"
                type="text"
                rows="7"
                multiline
                value={contactState.message}
                onChange={(e) => handleContactState(e, 'message')}
              />
            </FormControl>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="actions">
            <button className="button next">ΑΠΟΣΤΟΛΗ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
