import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SEO from 'components/seo/SEO';
import { checkOrderInfo, setNotes } from 'models/actions/checkoutActions';
import { cart } from 'models/selectors/cartSelectors';
import { notes } from 'models/selectors/checkoutSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Billing from './Billing';
import CheckoutStepper from './CheckoutStepper';
import PaymentMethods from './PaymentMethods';
import ShippingMethods from './ShippingMethods';

const CheckoutEdit = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(cart);
  const dispatch = useDispatch();
  const checkoutNotes = useSelector(notes);

  useEffect(() => {
    if (cartItems?.length === 0) {
      navigate('/');
    }
  });

  return (
    <div className="content checkout step3">
      <SEO
        title="Shoppy checkout step 3"
        description="Shoppy checkout step 3 page"
        name="Shoppy"
        type="article"
      />
      <div className="row">
        <div className="wrapper">
          <div className="text-center">
            <h1 className="page-title">ADDRESS AND PAYMENT</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <CheckoutStepper step="2" />
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="actions separate">
            <button className="button back">
              <Link to="/catalog">Back to catalog</Link>
            </button>
            <button
              className="button next"
              onClick={() => dispatch(checkOrderInfo())}>
              Confirm order
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="billing-shipping-container">
            <Billing />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <FormControl fullWidth>
            <TextField
              placeholder="Notes"
              multiline
              id="notes"
              rows={2}
              value={checkoutNotes}
              onChange={(e) => dispatch(setNotes(e.target.value))}
            />
          </FormControl>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="payment-shipping-container">
            <PaymentMethods />
            <ShippingMethods />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="actions separate">
            <button className="button back">
              <Link to="/catalog">Back to catalog</Link>
            </button>
            <button
              className="button next"
              onClick={() => dispatch(checkOrderInfo())}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutEdit;
