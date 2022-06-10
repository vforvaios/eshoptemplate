import Pagination from '@material-ui/lab/Pagination';
import React from 'react';

const CatalogPagination = ({ pagination }) => (
  <div className="catalog-pagination pagination">
    <Pagination
      page={pagination.currentPage}
      count={pagination.total}
      showFirstButton
      showLastButton
    />
  </div>
);

export default CatalogPagination;
