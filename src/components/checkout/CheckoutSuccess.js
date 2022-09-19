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
            <h2>Congrats!</h2>
            <div>
              Η ΠΑΡΑΓΓΕΛΙΑ ΣΑΣ ΟΛΟΚΛΗΡΩΘΗΚΕ. ΠΑΡΑΚΑΛΩ ΕΛΕΞΤΕ ΤΟ EMAIL ΣΑΣ.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
