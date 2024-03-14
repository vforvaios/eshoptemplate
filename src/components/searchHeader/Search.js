import Autocomplete from '@mui/material/Autocomplete';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import {
  getSearchRelatedProducts,
  setSearchLoading,
} from 'models/actions/catalogActions';
import {
  searchedResults,
  searchLoading,
} from 'models/selectors/catalogSelectors';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(searchLoading);
  const products = useSelector(searchedResults);
  const [searchProductText, setSearchProductText] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="search-relative-container">
      <i className="icon-search" onClick={() => setShowSearch(!showSearch)} />
      {showSearch && (
        <ClickAwayListener
          onClickAway={(e) => {
            e.stopPropagation();
            setShowSearch(false);
          }}>
          <div className="main-menu-search-container">
            <FormControl>
              <Autocomplete
                clearOnBlur={false}
                disableClearable
                id="header-search"
                options={products || []}
                getOptionLabel={(option) => `${option?.['productTitle'] || ''}`}
                renderOption={(props, option) => {
                  return (
                    <li {...props} key={option.productId}>
                      {option.productTitle}
                    </li>
                  );
                }}
                inputValue={searchProductText || ''}
                noOptionsText="No products found."
                onChange={(e, product) => {
                  navigate(`/product/${product?.productId}`);
                  setShowSearch(false);
                }}
                onInputChange={(e, value) => {
                  setSearchProductText(value);
                  dispatch(setSearchLoading(true));
                  dispatch(getSearchRelatedProducts(value));
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Search..."
                    placeholder="Select"
                  />
                )}
              />
              {loading && <span className="minor-loading">Loading...</span>}
            </FormControl>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default Search;
