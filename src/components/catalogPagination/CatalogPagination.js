import { Pagination } from 'semantic-ui-react';
import {
  setCurrentCatalogPage,
  setGeneralLoading,
} from 'models/actions/catalogActions';
import React from 'react';
import { useDispatch } from 'react-redux';

const CatalogPagination = ({ pagination }) => {
  const dispatch = useDispatch();
  const count = Math.ceil(pagination.total / process.env.REACT_APP_PER_PAGE);

  return (
    count > 1 && (
      <div className="catalog-pagination pagination">
        <Pagination
          activePage={Number(pagination.currentPage)}
          totalPages={count}
          onPageChange={(e, value) => {
            dispatch(setGeneralLoading(true));
            dispatch(setCurrentCatalogPage(Number(value)));
          }}
        />
      </div>
    )
  );
};

export default CatalogPagination;
