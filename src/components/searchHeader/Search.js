import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import React from 'react';

const Search = () => (
  <FormControl>
    <InputLabel htmlFor="header-search">ΑΝΑΖΗΤΗΣΗ...</InputLabel>
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
