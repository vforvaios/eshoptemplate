import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const Search = () => (
  <FormControl>
    <InputLabel htmlFor="header-search">Search</InputLabel>
    <Input
      id="header-search"
      type="search"
      value=""
      onChange={() => {}}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
    />
  </FormControl>
);

export default Search;
