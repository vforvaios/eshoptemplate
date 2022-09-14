import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';

const BillingShippingInputs = ({
  billing,
  inputs,
  setInfo,
  sameAsBilling,
  setSameAsBilling,
}) => {
  const {
    name,
    lastName,
    email,
    phone,
    mobile,
    address,
    postCode,
    city,
    region,
  } = inputs;

  return (
    <div>
      <h3>{billing ? 'BILLING ADDRESS' : 'SHIPPING ADDRESS'}</h3>
      {!billing && (
        <>
          <FormControlLabel
            label="Same as billing"
            control={
              <Checkbox
                checked={sameAsBilling}
                onChange={() => setSameAsBilling(!sameAsBilling)}
              />
            }
          />
        </>
      )}
      <div className={`${!billing && sameAsBilling ? 'same-as-billing' : ''}`}>
        <FormControl fullWidth>
          <InputLabel htmlFor="name">NAME</InputLabel>
          <Input
            fullWidth
            id="name"
            type="text"
            value={name}
            error={false}
            onChange={(e) => setInfo('name', e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="lastName">LAST NAME</InputLabel>
          <Input
            fullWidth
            id="lastName"
            type="text"
            value={lastName}
            error={false}
            onChange={(e) => setInfo('lastName', e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="email">EMAIL</InputLabel>
          <Input
            fullWidth
            id="email"
            type="email"
            value={email}
            error={false}
            onChange={(e) => setInfo('email', e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="phone">PHONE</InputLabel>
          <Input
            fullWidth
            id="phone"
            type="text"
            value={phone}
            error={false}
            onChange={(e) => setInfo('phone', e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="mobile">MOBILE</InputLabel>
          <Input
            fullWidth
            id="mobile"
            type="text"
            value={mobile}
            error={false}
            onChange={(e) => setInfo('mobile', e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="address">ADDRESS</InputLabel>
          <Input
            fullWidth
            id="address"
            type="text"
            value={address}
            error={false}
            onChange={(e) => setInfo('address', e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="postCode">POST CODE</InputLabel>
          <Input
            fullWidth
            id="postCode"
            type="text"
            value={postCode}
            error={false}
            onChange={(e) => setInfo('postCode', e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="city">CITY</InputLabel>
          <Input
            fullWidth
            id="city"
            type="text"
            value={city}
            error={false}
            onChange={(e) => setInfo('city', e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="region">REGION</InputLabel>
          <Input
            fullWidth
            id="region"
            type="text"
            value={region}
            error={false}
            onChange={(e) => setInfo('region', e.target.value)}
          />
        </FormControl>
      </div>
    </div>
  );
};

export default BillingShippingInputs;
