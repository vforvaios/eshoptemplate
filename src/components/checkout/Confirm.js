import MyCart from 'components/cart/MyCart';
import CheckoutStepper from 'components/checkout/CheckoutStepper';
import SEO from 'components/seo/SEO';
import { setGeneralLoading } from 'models/actions/catalogActions';
import { sendOrder } from 'models/actions/checkoutActions';
import { cart } from 'models/selectors/cartSelectors';
import { catalogIsLoading } from 'models/selectors/catalogSelectors';
import { orderOK } from 'models/selectors/checkoutSelectors';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import GeneralLoading from '../loader/GeneralLoading';

const Confirm = () => {
  const myCart = useSelector(cart);
  const myOrderOK = useSelector(orderOK);
  const loading = useSelector(catalogIsLoading);
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
    <>
      {loading && <GeneralLoading />}
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
              <h1 className="page-title">ΕΠΙΒΕΒΑΙΩΣΗ</h1>
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
    </>
  );
};

export default Confirm;
