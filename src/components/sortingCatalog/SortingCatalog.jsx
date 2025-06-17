import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {
  setCatalogSorting,
  setGeneralLoading,
} from '@/models/actions/catalogActions';
import { catalogSorting } from '@/models/selectors/catalogSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SortingCatalog = () => {
  const dispatch = useDispatch();
  const sorting = useSelector(catalogSorting);

  useEffect(() => {
    if (!isNaN(sorting)) {
      dispatch(setCatalogSorting('createdAt-DESC'));
    }
  }, []);

  return (
    <div className="sorting-container">
      <FormControl variant="standard">
        <InputLabel id="sortingCatalogProducts">Order by</InputLabel>
        <Select
          labelId="sortingCatalogProducts"
          autoWidth
          id="sortingSelect"
          value={sorting}
          label="Order by"
          onChange={(e) => {
            dispatch(setGeneralLoading(true));
            dispatch(setCatalogSorting(e.target.value));
          }}>
          <MenuItem value={`price-ASC`}>Price (low to high)</MenuItem>
          <MenuItem value={`price-DESC`}>Price (high to low)</MenuItem>
          <MenuItem value={`createdAt-DESC`}>Date</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortingCatalog;
