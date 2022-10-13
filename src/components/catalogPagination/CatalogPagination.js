import Pagination from '@material-ui/lab/Pagination';
import {
  setCurrentCatalogPage,
  setGeneralLoading,
} from 'models/actions/catalogActions';
import React from 'react';
import { useDispatch } from 'react-redux';

const CatalogPagination = ({ pagination, setPage }) => {
  const dispatch = useDispatch();

  return (
    <div className="catalog-pagination pagination">
      <Pagination
        page={Number(pagination.currentPage)}
        count={Math.ceil(pagination.total / process.env.REACT_APP_PER_PAGE)}
        showFirstButton
        showLastButton
        onChange={(e, value) => {
          dispatch(setGeneralLoading(true));
          dispatch(setCurrentCatalogPage(Number(value)));
        }}
      />
    </div>
  );
};

export default CatalogPagination;
