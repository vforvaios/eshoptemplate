import { clearOrder } from 'models/actions/checkoutActions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const CheckoutSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearOrder());
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
