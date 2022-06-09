import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React, { useState } from 'react';

const SortingCatalog = () => {
  const [sorting, setSorting] = useState(null);

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
          onChange={(e) => setSorting(e.target.value)}>
          <MenuItem value={10}>Ανά τιμή (αύξουσα)</MenuItem>
          <MenuItem value={20}>Ανά τιμή (φθίνουσα)</MenuItem>
          <MenuItem value={30}>Δημοφιλέστερο</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortingCatalog;
