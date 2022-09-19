import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {
  setBillingInfo,
  setShippingInfo,
  setReceipt,
  setSameAsBilling,
} from 'models/actions/checkoutActions';
import {
  billingInfo,
  shippingInfo,
  sameAsBilling,
  receipt,
} from 'models/selectors/checkoutSelectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BillingShippingInputs from './BillingShippingInputs';

const Billing = () => {
  const dispatch = useDispatch();
  const myBillingInfo = useSelector(billingInfo);
  const myReceipt = useSelector(receipt);
  const myShippingInfo = useSelector(shippingInfo);
  const mySameAsBilling = useSelector(sameAsBilling);

  return (
    <div className="billing-shipping billing">
      <div className="receipt-container">
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="receipt-or-invoice"
            value={myReceipt}
            onChange={(e) => dispatch(setReceipt(e.target.value))}
            name="receipt-buttons-group">
            <FormControlLabel
              value="receipt"
              control={<Radio />}
              label="Απόδειξη"
            />
            <FormControlLabel
              value="invoice"
              control={<Radio />}
              label="Τιμολόγιο"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="flex-billing-shipping">
        <div className="billing-inputs">
          <BillingShippingInputs
            billing
            inputs={myBillingInfo}
            sameAsBilling={false}
            setInfo={setBillingInfo}
          />
        </div>
        <div className="billing-inputs">
          <BillingShippingInputs
            billing={false}
            sameAsBilling={mySameAsBilling}
            inputs={myShippingInfo}
            setInfo={setShippingInfo}
            setSameAsBilling={setSameAsBilling}
          />
        </div>
      </div>
    </div>
  );
};

export default Billing;
