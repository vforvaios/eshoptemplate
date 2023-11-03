import {
  setCatalogSorting,
  setGeneralLoading,
} from 'models/actions/catalogActions';
import { catalogSorting } from 'models/selectors/catalogSelectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SortingCatalog = () => {
  const dispatch = useDispatch();
  const sorting = useSelector(catalogSorting);

  return (
    <div className="sorting-container">
      <label for="sortingCatalogProducts">Ταξινόμηση</label>
      <select
        id="sortingCatalogProducts"
        value={sorting}
        onChange={(e) => {
          dispatch(setGeneralLoading(true));
          dispatch(setCatalogSorting(e.target.value));
        }}>
        <option value={1}>Ανά τιμή (αύξουσα)</option>
        <option value={2}>Ανά τιμή (φθίνουσα)</option>
      </select>
    </div>
  );
};

export default SortingCatalog;
