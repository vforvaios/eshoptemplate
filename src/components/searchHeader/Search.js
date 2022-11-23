import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { getSearchRelatedProducts } from 'models/actions/catalogActions';
import { searchedResults } from 'models/selectors/catalogSelectors';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(searchedResults);
  const [searchProductText, setSearchProductText] = useState('');

  return (
    <FormControl>
      <Autocomplete
        clearOnBlur={false}
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
        value=""
        inputValue={searchProductText || ''}
        noOptionsText="Δεν βρέθηκαν προϊόντα"
        onChange={(e, product) => {
          navigate(`/product/${product?.productId}`);
        }}
        onInputChange={(e, value) => {
          setSearchProductText(value);
          dispatch(getSearchRelatedProducts(value));
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Αναζήτηση προϊόντων"
            placeholder="Επιλογή"
          />
        )}
      />
      {/* <Input
      id="header-search"
      type="search"
      value=""
      onChange={() => {}}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
    /> */}
    </FormControl>
  );
};

export default Search;
