import { Pagination } from 'semantic-ui-react';
import React from 'react';

const OrdersPagination = ({ page, count, onChange }) => {
  return (
    <div className="row">
      <div className="wrapper">
        <div className="catalog-pagination pagination">
          <Pagination
            activePage={page}
            totalPages={count}
            onPageChange={(e, value) => onChange(e, value)}
          />
        </div>
      </div>
    </div>
  );
};

export default OrdersPagination;
