import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { getCountries } from 'models/actions/checkoutActions';
import { countries } from 'models/selectors/checkoutSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const BillingShippingInputs = ({
  billing,
  inputs,
  setInfo,
  sameAsBilling,
  setSameAsBilling,
  errors,
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
    country,
    prefecture,
  } = inputs;

  const dispatch = useDispatch();
  const allCountries = useSelector(countries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  console.log(country);

  return (
    <div>
      <h3>{billing ? 'ΔΙΕΥΘΥΝΣΗ ΑΠΟΣΤΟΛΗΣ' : 'ΔΙΕΥΘΥΝΣΗ ΠΛΗΡΩΜΗΣ'}</h3>
      {!billing && (
        <>
          <FormControlLabel
            label="Ίδιο με πληρωμή"
            control={
              <Checkbox
                checked={sameAsBilling}
                onChange={() => dispatch(setSameAsBilling(!sameAsBilling))}
              />
            }
          />
        </>
      )}
      <div className={`${!billing && sameAsBilling ? 'same-as-billing' : ''}`}>
        <FormControl
          fullWidth
          className={errors?.includes('name') ? 'error' : ''}>
          <InputLabel htmlFor="name">ΟΝΟΜΑ</InputLabel>
          <Input
            fullWidth
            id="name"
            type="text"
            value={name}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'name', name: e.target.value }))
            }
          />
        </FormControl>
        <FormControl
          fullWidth
          className={errors?.includes('lastName') ? 'error' : ''}>
          <InputLabel htmlFor="lastName">ΕΠΩΝΥΜΟ</InputLabel>
          <Input
            fullWidth
            id="lastName"
            type="text"
            value={lastName}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'lastName', name: e.target.value }))
            }
          />
        </FormControl>
        <FormControl
          fullWidth
          className={errors?.includes('email') ? 'error' : ''}>
          <InputLabel htmlFor="email">EMAIL</InputLabel>
          <Input
            fullWidth
            id="email"
            type="email"
            value={email}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'email', name: e.target.value }))
            }
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="phone">ΤΗΛΕΦΩΝΟ</InputLabel>
          <Input
            fullWidth
            id="phone"
            type="text"
            value={phone}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'phone', name: e.target.value }))
            }
          />
        </FormControl>
        <FormControl
          fullWidth
          className={errors?.includes('mobile') ? 'error' : ''}>
          <InputLabel htmlFor="mobile">ΚΙΝΗΤΟ</InputLabel>
          <Input
            fullWidth
            id="mobile"
            type="text"
            value={mobile}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'mobile', name: e.target.value }))
            }
          />
        </FormControl>
        <FormControl
          fullWidth
          className={errors?.includes('address') ? 'error' : ''}>
          <InputLabel htmlFor="address">ΔΙΕΥΘΥΝΣΗ</InputLabel>
          <Input
            fullWidth
            id="address"
            type="text"
            value={address}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'address', name: e.target.value }))
            }
          />
        </FormControl>
        <FormControl
          fullWidth
          className={errors?.includes('postCode') ? 'error' : ''}>
          <InputLabel htmlFor="postCode">Τ.Κ.</InputLabel>
          <Input
            fullWidth
            id="postCode"
            type="text"
            value={postCode}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'postCode', name: e.target.value }))
            }
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="city">ΠΟΛΗ</InputLabel>
          <Input
            fullWidth
            id="city"
            type="text"
            value={city}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'city', name: e.target.value }))
            }
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="region">ΠΕΡΙΟΧΗ</InputLabel>
          <Input
            fullWidth
            id="region"
            type="text"
            value={region}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'region', name: e.target.value }))
            }
          />
        </FormControl>
        <FormControl variant="standard" fullWidth>
          <InputLabel className="select-label" htmlFor="billing-country-label2">
            ΧΩΡΑ
          </InputLabel>
          <Select
            labelId="billing-country-label2"
            id="billing-country-label"
            value={Number(country) || ''}
            label="Χώρα"
            onChange={(e) =>
              dispatch(setInfo({ key: 'country', name: e.target.value }))
            }>
            {allCountries?.map((country) => (
              <MenuItem key={country?.id} value={Number(country?.id)}>
                {country?.country_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default BillingShippingInputs;
