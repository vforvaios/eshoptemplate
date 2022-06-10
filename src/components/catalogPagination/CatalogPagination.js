import Pagination from '@material-ui/lab/Pagination';
import React from 'react';

const CatalogPagination = () => (
  <div className="catalog-pagination pagination">
    <Pagination count={10} showFirstButton showLastButton />
  </div>
);

export default CatalogPagination;
