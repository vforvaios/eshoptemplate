/* eslint-disable react-hooks/exhaustive-deps */
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { setGeneralLoading } from 'models/actions/catalogActions';
import {
  getPrefecturesPerCountryForShipping,
  getPrefecturesPerCountryForBilling,
  getShippingMethods,
} from 'models/actions/checkoutActions';
import { doys } from 'models/selectors/checkoutSelectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const BillingShippingInputs = ({
  isReceipt,
  billing,
  inputs,
  setInfo,
  sameAsBilling,
  setSameAsBilling,
  errors,
  countries,
  prefectures,
}) => {
  const {
    name,
    lastName,
    afm,
    doy,
    eponymia,
    email,
    phone,
    mobile,
    address,
    postCode,
    city,
    country,
    prefecture,
  } = inputs;

  const dispatch = useDispatch();
  const allDoys = useSelector(doys);

  return (
    <div>
      <h3>{billing ? 'SHIPPING ADDRESS' : 'PAYMENT ADDRESS'}</h3>
      {!billing && (
        <>
          <FormControlLabel
            label="Same as payment"
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
        {billing && isReceipt === 'invoice' && (
          <div className="invoice-container-fields">
            <FormControl
              fullWidth
              className={errors?.includes('afm') ? 'error' : ''}>
              <InputLabel htmlFor="afm">AFM</InputLabel>
              <Input
                fullWidth
                id="afm"
                type="text"
                value={afm}
                error={false}
                onChange={(e) =>
                  dispatch(setInfo({ key: 'afm', name: e.target.value }))
                }
              />
            </FormControl>
            <FormControl
              fullWidth
              className={errors?.includes('eponymia') ? 'error' : ''}>
              <InputLabel htmlFor="eponymia">EPONYMIA</InputLabel>
              <Input
                fullWidth
                id="eponymia"
                type="text"
                value={eponymia}
                error={false}
                onChange={(e) =>
                  dispatch(setInfo({ key: 'eponymia', name: e.target.value }))
                }
              />
            </FormControl>
            <FormControl fullWidth>
              <Autocomplete
                disablePortal
                id="doy"
                onChange={(e, values) => {
                  dispatch(setInfo({ key: 'doy', name: values }));
                }}
                value={doy ? doy : null}
                options={allDoys}
                renderInput={(params) => (
                  <TextField
                    error={false}
                    className={errors?.includes('doy') ? 'error' : ''}
                    {...params}
                    label="DOY"
                  />
                )}
              />
            </FormControl>
          </div>
        )}
        <FormControl
          fullWidth
          className={errors?.includes('name') ? 'error' : ''}>
          <InputLabel htmlFor="name">NAME</InputLabel>
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
          <InputLabel htmlFor="lastName">SURNAME</InputLabel>
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
          <InputLabel htmlFor="phone">PHONE</InputLabel>
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
          <InputLabel htmlFor="mobile">MOBILE</InputLabel>
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
          <InputLabel htmlFor="address">ADDRESS</InputLabel>
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
          <InputLabel htmlFor="postCode">POSTCODE</InputLabel>
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
          <InputLabel htmlFor="city">CITY</InputLabel>
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
        <FormControl variant="standard" fullWidth>
          <InputLabel className="select-label" htmlFor="billing-country-label2">
            COUNTRY
          </InputLabel>
          <Select
            labelId="billing-country-label2"
            id="billing-country-label"
            value={Number(country) || ''}
            label="COUNTRY"
            onChange={(e) => {
              dispatch(setInfo({ key: 'country', name: e.target.value }));
              dispatch(setGeneralLoading(true));
              billing
                ? dispatch(getPrefecturesPerCountryForBilling(e.target.value))
                : dispatch(getPrefecturesPerCountryForShipping(e.target.value));
            }}>
            {countries?.map((country) => (
              <MenuItem key={country?.id} value={Number(country?.id)}>
                {country?.country_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
          fullWidth
          className={errors?.includes('prefecture') ? 'error' : ''}>
          <InputLabel
            className="select-label"
            htmlFor="billing-prefecture-label2">
            PREFECTURE
          </InputLabel>
          <Select
            labelId="billing-prefecture-label2"
            id="billing-prefecture-label"
            value={Number(prefecture) || ''}
            label="PREFECTURE"
            onChange={(e) => {
              dispatch(setInfo({ key: 'prefecture', name: e.target.value }));
              dispatch(setGeneralLoading(true));
              dispatch(getShippingMethods());
            }}>
            {prefectures?.map((prefecture) => (
              <MenuItem key={prefecture?.id} value={Number(prefecture?.id)}>
                {prefecture?.prefecture_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default BillingShippingInputs;
