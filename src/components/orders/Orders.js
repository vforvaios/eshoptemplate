/* eslint-disable react-hooks/exhaustive-deps */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SEO from 'components/seo/SEO';
import { toggleLoader } from 'models/actions/loaderActions';
import { getMyOrders } from 'models/actions/userActions';
import { myOrders } from 'models/selectors/userSelector';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Order from './Order';

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(myOrders);

  useEffect(() => {
    dispatch(toggleLoader(true));
    dispatch(getMyOrders());
  }, []);

  return (
    <div className="content orders">
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
      {orders?.length > 0 ? (
        <Table className="products-grid">
          <TableHead>
            <TableRow>
              <TableCell>ΚΩΔΙΚΟΣ</TableCell>
              <TableCell>ΗΜΕΡΟΜΗΝΙΑ</TableCell>
              <TableCell>ΟΝΟΜΑ</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>ΤΙΜΗ</TableCell>
              <TableCell>ΤΕΜΑΧΙΑ</TableCell>
              <TableCell>ΚΑΤΑΣΤΑΣΗ</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order) => (
              <Order
                order={order}
                key={order?.id}
                toggleOrderPopup={() => {}}
              />
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="page-not-found-countainer">
          <h2>Δεν υπάρχουν παραγγελίες</h2>
        </div>
      )}
    </div>
  );
};

export default Orders;
