/* eslint-disable react-hooks/exhaustive-deps */
import Input from 'components/input/Input';
import { setGeneralLoading } from 'models/actions/catalogActions';
import {
  getPrefecturesPerCountryForShipping,
  getPrefecturesPerCountryForBilling,
  getShippingMethods,
} from 'models/actions/checkoutActions';
import React from 'react';
import { useDispatch } from 'react-redux';

const BillingShippingInputs = ({
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

  return (
    <div>
      <h3>{billing ? 'ΔΙΕΥΘΥΝΣΗ ΑΠΟΣΤΟΛΗΣ' : 'ΔΙΕΥΘΥΝΣΗ ΠΛΗΡΩΜΗΣ'}</h3>
      {!billing && (
        <>
          <label>Ίδιο με πληρωμή</label>
          <input
            type="checkbox"
            checked={sameAsBilling}
            onChange={() => dispatch(setSameAsBilling(!sameAsBilling))}
          />
        </>
      )}
      <div className={`${!billing && sameAsBilling ? 'same-as-billing' : ''}`}>
        <div className={errors?.includes('name') ? 'error' : ''}>
          <label htmlFor="name">ΟΝΟΜΑ</label>
          <Input
            id="name"
            type="text"
            value={name}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'name', name: e.target.value }))
            }
          />
        </div>
        <div className={errors?.includes('lastName') ? 'error' : ''}>
          <label htmlFor="lastName">ΕΠΩΝΥΜΟ</label>
          <Input
            id="lastName"
            type="text"
            value={lastName}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'lastName', name: e.target.value }))
            }
          />
        </div>
        <div className={errors?.includes('email') ? 'error' : ''}>
          <label htmlFor="email">EMAIL</label>
          <Input
            id="email"
            type="email"
            value={email}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'email', name: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="phone">ΤΗΛΕΦΩΝΟ</label>
          <Input
            id="phone"
            type="text"
            value={phone}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'phone', name: e.target.value }))
            }
          />
        </div>
        <div className={errors?.includes('mobile') ? 'error' : ''}>
          <label htmlFor="mobile">ΚΙΝΗΤΟ</label>
          <Input
            id="mobile"
            type="text"
            value={mobile}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'mobile', name: e.target.value }))
            }
          />
        </div>
        <div className={errors?.includes('address') ? 'error' : ''}>
          <label htmlFor="address">ΔΙΕΥΘΥΝΣΗ</label>
          <Input
            id="address"
            type="text"
            value={address}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'address', name: e.target.value }))
            }
          />
        </div>
        <div className={errors?.includes('postCode') ? 'error' : ''}>
          <label htmlFor="postCode">Τ.Κ.</label>
          <Input
            id="postCode"
            type="text"
            value={postCode}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'postCode', name: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="city">ΠΟΛΗ</label>
          <Input
            id="city"
            type="text"
            value={city}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'city', name: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="region">ΠΕΡΙΟΧΗ</label>
          <Input
            id="region"
            type="text"
            value={region}
            error={false}
            onChange={(e) =>
              dispatch(setInfo({ key: 'region', name: e.target.value }))
            }
          />
        </div>
        <div>
          <label className="select-label" htmlFor="billing-country-label2">
            ΧΩΡΑ
          </label>
          <select
            labelId="billing-country-label2"
            id="billing-country-label"
            value={Number(country) || ''}
            onChange={(e) => {
              dispatch(setInfo({ key: 'country', name: e.target.value }));
              dispatch(setGeneralLoading(true));
              billing
                ? dispatch(getPrefecturesPerCountryForBilling(e.target.value))
                : dispatch(getPrefecturesPerCountryForShipping(e.target.value));
            }}>
            {countries?.map((country) => (
              <option key={country?.id} value={Number(country?.id)}>
                {country?.country_name}
              </option>
            ))}
          </select>
        </div>
        <div className={errors?.includes('prefecture') ? 'error' : ''}>
          <label className="select-label" htmlFor="billing-prefecture-label2">
            ΝΟΜΟΣ
          </label>
          <select
            labelId="billing-prefecture-label2"
            id="billing-prefecture-label"
            value={Number(prefecture) || ''}
            onChange={(e) => {
              dispatch(setInfo({ key: 'prefecture', name: e.target.value }));
              dispatch(setGeneralLoading(true));
              dispatch(getShippingMethods());
            }}>
            {prefectures?.map((prefecture) => (
              <option key={prefecture?.id} value={Number(prefecture?.id)}>
                {prefecture?.prefecture_name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default BillingShippingInputs;
