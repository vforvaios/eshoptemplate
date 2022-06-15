import Button from '@material-ui/core/Button';
import MyCart from 'components/cart/MyCart';
import CheckoutStepper from 'components/checkout/CheckoutStepper';
import { cart } from 'models/selectors/cartSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Confirm = () => {
  const myCart = useSelector(cart);

  return (
    <div className="content checkout step3">
      <div className="row">
        <div className="wrapper">
          <div className="page-title text-center">
            <h1>Confirm</h1>
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
              <Link to="/catalog">Back to step 2</Link>
            </Button>
            <Button className="button green">Place the order</Button>
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
              <Link to="/catalog">Back to step 2</Link>
            </Button>
            <Button className="button green">Place the order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
