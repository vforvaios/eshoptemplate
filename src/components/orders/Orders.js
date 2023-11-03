/* eslint-disable react-hooks/exhaustive-deps */
import Table from 'react-bootstrap/Table';
import SEO from 'components/seo/SEO';
import { setGeneralLoading } from 'models/actions/catalogActions';
import {
  getOrdersStatuses,
  setCurrentOrdersPage,
  setOrderId,
} from 'models/actions/userActions';
import { myOrders, ordersPagination } from 'models/selectors/userSelector';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Order from './Order';
import OrdersPagination from './OrdersPagination';

const Orders = () => {
  const dispatch = useDispatch();
  const pagination = useSelector(ordersPagination);
  const orders = useSelector(myOrders);
  const count = Math.ceil(pagination.total / process.env.REACT_APP_PER_PAGE);

  const handleOrderPageChange = (e, value) => {
    dispatch(setGeneralLoading(true));
    dispatch(setCurrentOrdersPage(Number(value)));
  };

  useEffect(() => {
    dispatch(setOrderId(''));
    dispatch(setGeneralLoading(true));
    dispatch(getOrdersStatuses());
  }, []);

  return (
    <div className="content orders-page">
      <SEO
        title="Shoppy my orders"
        description="Shoppy my orders page"
        name="Shoppy"
        type="article"
      />
      <div className="row">
        <div className="wrapper">
          <div className="text-center">
            <h1 className="page-title">ΟΙ ΠΑΡΑΓΓΕΛΙΕΣ ΜΟΥ</h1>
          </div>
        </div>
      </div>
      {count > 1 && (
        <OrdersPagination
          page={Number(pagination.currentPage)}
          onChange={handleOrderPageChange}
          count={count}
        />
      )}
      <div className="row">
        <div className="wrapper">
          {orders?.length > 0 ? (
            <Table className="products-grid table">
              <thead>
                <tr>
                  <td>ΚΩΔΙΚΟΣ</td>
                  <td>ΗΜΕΡΟΜΗΝΙΑ</td>
                  <td>ΟΝΟΜΑ</td>
                  <td>EMAIL</td>
                  <td>ΤΙΜΗ</td>
                  <td>ΤΕΜΑΧΙΑ</td>
                  <td>ΚΑΤΑΣΤΑΣΗ</td>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order) => (
                  <Order order={order} key={order?.id} toggleOrder={() => {}} />
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="page-not-found-countainer">
              <h2>Δεν υπάρχουν παραγγελίες</h2>
            </div>
          )}
        </div>
      </div>
      {count > 1 && (
        <OrdersPagination
          page={Number(pagination.currentPage)}
          onChange={handleOrderPageChange}
          count={count}
        />
      )}
    </div>
  );
};

export default Orders;
