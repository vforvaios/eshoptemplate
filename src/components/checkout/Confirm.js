import Button from '@material-ui/core/Button';
import MyCart from 'components/cart/MyCart';
import CheckoutStepper from 'components/checkout/CheckoutStepper';
import { sendOrder } from 'models/actions/checkoutActions';
import { cart } from 'models/selectors/cartSelectors';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Confirm = () => {
  const myCart = useSelector(cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (myCart?.length === 0) {
      navigate('/');
    }
  });

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
            <Button className="button standard">
              <Link to="/checkout/step2">ΕΠΕΞΕΡΓΑΣΙΑ ΠΑΡΑΓΓΕΛΙΑΣ</Link>
            </Button>
            <Button
              onClick={() => dispatch(sendOrder())}
              className="button green">
              ΟΛΟΚΛΗΡΩΣΗ ΠΑΡΑΓΓΕΛΙΑΣ
            </Button>
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
            <Button className="button standard">
              <Link to="/checkout/step2">ΕΠΕΞΕΡΓΑΣΙΑ ΠΑΡΑΓΓΕΛΙΑΣ</Link>
            </Button>
            <Button
              onClick={() => dispatch(sendOrder())}
              className="button green">
              ΟΛΟΚΛΗΡΩΣΗ ΠΑΡΑΓΓΕΛΙΑΣ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
