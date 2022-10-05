import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {
  setCatalogSorting,
  setCatalogLoading,
} from 'models/actions/catalogActions';
import { catalogSorting } from 'models/selectors/catalogSelectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SortingCatalog = () => {
  const dispatch = useDispatch();
  const sorting = useSelector(catalogSorting);

  return (
    <div className="sorting-container">
      <FormControl>
        <InputLabel id="sortingCatalogProducts">Ταξινόμηση</InputLabel>
        <Select
          labelId="sortingCatalogProducts"
          autoWidth
          id="sortingSelect"
          value={sorting}
          label="Ταξινόμηση"
          onChange={(e) => {
            dispatch(setCatalogLoading(true));
            dispatch(setCatalogSorting(e.target.value));
          }}>
          <MenuItem value={1}>Ανά τιμή (αύξουσα)</MenuItem>
          <MenuItem value={2}>Ανά τιμή (φθίνουσα)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortingCatalog;
