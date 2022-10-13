import MyCart from 'components/cart/MyCart';
import CheckoutStepper from 'components/checkout/CheckoutStepper';
import { setGeneralLoading } from 'models/actions/catalogActions';
import { sendOrder } from 'models/actions/checkoutActions';
import { cart } from 'models/selectors/cartSelectors';
import { orderOK } from 'models/selectors/checkoutSelectors';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Confirm = () => {
  const myCart = useSelector(cart);
  const myOrderOK = useSelector(orderOK);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (myCart?.length === 0) {
      navigate('/');
    }
    if (!myOrderOK) {
      navigate('../checkout/step2');
    }
  }, []);

  return (
    <div className="content checkout step3">
      <div className="row">
        <div className="wrapper">
          <div className="page-title text-center">
            <h1>ΕΠΙΒΕΒΑΙΩΣΗ</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <CheckoutStepper step="3" />
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="actions separate">
            <button className="button back">
              <Link to="/checkout/step2">ΕΠΕΞΕΡΓΑΣΙΑ ΠΑΡΑΓΓΕΛΙΑΣ</Link>
            </button>
            <button
              onClick={() => {
                dispatch(setGeneralLoading(true));
                dispatch(sendOrder());
              }}
              className="button next">
              ΟΛΟΚΛΗΡΩΣΗ ΠΑΡΑΓΓΕΛΙΑΣ
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <MyCart cart={myCart} updateable={false} />
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="actions separate">
            <button className="button back">
              <Link to="/checkout/step2">ΕΠΕΞΕΡΓΑΣΙΑ ΠΑΡΑΓΓΕΛΙΑΣ</Link>
            </button>
            <button
              onClick={() => dispatch(sendOrder())}
              className="button next">
              ΟΛΟΚΛΗΡΩΣΗ ΠΑΡΑΓΓΕΛΙΑΣ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
