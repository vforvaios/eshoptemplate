import { removeCatalogFilter } from 'models/actions/catalogActions';
import React from 'react';
import { useDispatch } from 'react-redux';

const CatalogSelectedFilter = ({ selectedFilters, categories }) => {
  const dispatch = useDispatch();

  return (
    <div className="filter-box">
      <div className="filter-title orange">ΕΠΙΛΕΓΜΕΝΑ ΦΙΛΤΡΑ</div>
      <ul className="selected-filters-list">
        {selectedFilters?.selectedCategory && (
          <li
            className="selected-filter-option"
            onClick={() => dispatch(removeCatalogFilter('selectedCategory'))}>
            <span>
              {
                categories.find(
                  (cat) => cat?.id === selectedFilters?.selectedCategory,
                ).name
              }
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CatalogSelectedFilter;
