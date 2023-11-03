/* eslint-disable react-hooks/exhaustive-deps */
import { setGeneralLoading } from 'models/actions/catalogActions';
import {
  setBillingInfo,
  setShippingInfo,
  setReceipt,
  setSameAsBilling,
  getCountries,
  getPrefecturesPerCountryForBilling,
} from 'models/actions/checkoutActions';
import {
  billingInfo,
  shippingInfo,
  sameAsBilling,
  receipt,
  billingErrors,
  shippingErrors,
  countries,
} from 'models/selectors/checkoutSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BillingShippingInputs from './BillingShippingInputs';

const Billing = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector(countries);
  const myBillingInfo = useSelector(billingInfo);
  const myReceipt = useSelector(receipt);
  const myShippingInfo = useSelector(shippingInfo);
  const mySameAsBilling = useSelector(sameAsBilling);
  const myBillingErrors = useSelector(billingErrors);
  const myShippingErrors = useSelector(shippingErrors);

  useEffect(() => {
    dispatch(setGeneralLoading(true));
    dispatch(getCountries());
    dispatch(getPrefecturesPerCountryForBilling(myBillingInfo.country));
  }, []);

  return (
    <div className="billing-shipping billing">
      <div className="receipt-container">
        <div
          aria-labelledby="receipt-or-invoice"
          value={myReceipt}
          onChange={(e) => dispatch(setReceipt(e.target.value))}
          name="receipt-buttons-group">
          <input type="radio" value="receipt" name="receiptinvoice" />
          Απόδειξη
          <input type="radio" value="invoice" name="receiptinvoice" />
          Τιμολόγιο
        </div>
      </div>
      <div className="flex-billing-shipping">
        <div className="billing-inputs">
          <BillingShippingInputs
            billing
            countries={allCountries}
            prefectures={myBillingInfo?.prefectures}
            inputs={myBillingInfo}
            sameAsBilling={false}
            setInfo={setBillingInfo}
            errors={myBillingErrors}
          />
        </div>
        <div className="billing-inputs">
          <BillingShippingInputs
            billing={false}
            countries={allCountries}
            prefectures={myShippingInfo?.prefectures}
            sameAsBilling={mySameAsBilling}
            inputs={myShippingInfo}
            setInfo={setShippingInfo}
            setSameAsBilling={setSameAsBilling}
            errors={myShippingErrors}
          />
        </div>
      </div>
    </div>
  );
};

export default Billing;
