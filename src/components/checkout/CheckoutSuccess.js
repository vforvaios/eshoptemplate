import { clearOrder } from 'models/actions/checkoutActions';
import { cart } from 'models/selectors/cartSelectors';
import {
  billingErrors,
  shippingErrors,
} from 'models/selectors/checkoutSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(cart);
  const myBillingErrors = useSelector(billingErrors);
  const myShippingErrors = useSelector(shippingErrors);

  useEffect(() => {
    if (cartItems?.length === 0) {
      navigate('/');
    }

    if (
      cartItems.length > 0 &&
      myBillingErrors.length === 0 &&
      myShippingErrors.length === 0
    ) {
      dispatch(clearOrder());
    }
  }, []);

  return (
    <div className="content checkout step4">
      <div className="row">
        <div className="wrapper">
          <div className="checkout-success">
            <h2>ΣΥΓΧΑΡΗΤΗΡΙΑ!</h2>
            <div className="success-message">
              Η ΠΑΡΑΓΓΕΛΙΑ ΣΑΣ ΟΛΟΚΛΗΡΩΘΗΚΕ. ΠΟΛΥ ΣΥΝΤΟΜΑ ΘΑ ΠΑΡΑΛΑΒΕΤΕ ΕΝΑ
              EMAIL ΜΕ ΤΙΣ ΠΛΗΡΟΦΟΡΙΕΣ ΤΗΣ ΠΑΡΑΓΓΕΛΙΑΣ ΣΑΣ. ΕΥΧΑΡΙΣΤΟΥΜΕ ΠΟΛΥ
              ΓΙΑ ΤΗΝ ΠΡΟΤΙΜΗΣΗ ΣΑΣ.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
