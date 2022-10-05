import Pagination from '@material-ui/lab/Pagination';
import React from 'react';

const CatalogPagination = ({ pagination }) => (
  <div className="catalog-pagination pagination">
    <Pagination
      page={pagination.currentPage}
      count={Math.ceil(pagination.total / process.env.REACT_APP_PER_PAGE)}
      showFirstButton
      showLastButton
    />
  </div>
);

export default CatalogPagination;
