import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React, { useState } from 'react';

import BillingShippingInputs from './BillingShippingInputs';

const Billing = () => {
  const [receipt, setReceipt] = useState('receipt');
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    mobile: '',
    address: '',
    postCode: '',
    city: '',
    region: '',
  });

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    mobile: '',
    address: '',
    postCode: '',
    city: '',
    region: '',
  });

  const setBillingInformation = (key, value) => {
    setBillingInfo({ ...billingInfo, [key]: value });
  };

  const setShippingInformation = (key, value) => {
    setShippingInfo({ ...shippingInfo, [key]: value });
  };

  return (
    <div className="billing-shipping billing">
      <div className="receipt-container">
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="receipt-or-invoice"
            value={receipt}
            onChange={(e) => setReceipt(e.target.value)}
            name="receipt-buttons-group">
            <FormControlLabel
              value="receipt"
              control={<Radio />}
              label="Receipt"
            />
            <FormControlLabel
              value="invoice"
              control={<Radio />}
              label="Invoice"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="flex-billing-shipping">
        <div className="billing-inputs">
          <BillingShippingInputs
            billing
            inputs={billingInfo}
            sameAsBilling={false}
            setInfo={setBillingInformation}
          />
        </div>
        <div className="billing-inputs">
          <BillingShippingInputs
            billing={false}
            sameAsBilling={sameAsBilling}
            inputs={shippingInfo}
            setInfo={setShippingInformation}
            setSameAsBilling={setSameAsBilling}
          />
        </div>
      </div>
    </div>
  );
};

export default Billing;
