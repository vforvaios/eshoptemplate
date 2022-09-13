import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';

const Billing = () => {
  return (
    <div className="billing-shipping billing">
      <div className="receipt-container">checkboxes</div>
      <div className="billing-inputs">
        <FormControl fullWidth>
          <InputLabel htmlFor="name">NAME</InputLabel>
          <Input
            fullWidth
            id="name"
            type="text"
            value={''}
            error={false}
            onChange={() => {}}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="lastName">LAST NAME</InputLabel>
          <Input
            fullWidth
            id="lastName"
            type="text"
            value={''}
            error={false}
            onChange={() => {}}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="email">EMAIL</InputLabel>
          <Input
            fullWidth
            id="email"
            type="email"
            value={''}
            error={false}
            onChange={() => {}}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="phone">PHONE</InputLabel>
          <Input
            fullWidth
            id="phone"
            type="text"
            value={''}
            error={false}
            onChange={() => {}}
          />
        </FormControl>
      </div>
    </div>
  );
};

export default Billing;
