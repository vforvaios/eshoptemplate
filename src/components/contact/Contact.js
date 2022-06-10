import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';

const Contact = () => {
  return (
    <div className="content contact-page">
      <div className="row">
        <div className="wrapper">
          <div className="page-title text-center">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="form-control">
            <FormControl>
              <InputLabel htmlFor="firstName">First Name</InputLabel>
              <Input id="firstName" type="text" value="" onChange={() => {}} />
            </FormControl>
          </div>
          <div className="form-control">
            <FormControl>
              <InputLabel htmlFor="lastName">Last Name</InputLabel>
              <Input id="lastName" type="text" value="" onChange={() => {}} />
            </FormControl>
          </div>
          <div className="form-control">
            <FormControl>
              <InputLabel htmlFor="message">Message</InputLabel>
              <Input
                id="message"
                type="text"
                rows="7"
                multiline
                value=""
                onChange={() => {}}
              />
            </FormControl>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="actions">
            <Button className="button green">CONTACT US</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
