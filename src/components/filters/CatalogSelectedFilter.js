import React from 'react';

const CatalogSelectedFilter = ({ selectedFilters, categories }) => {
  return (
    <div className="filter-box">
      <div className="filter-title orange">ΕΠΙΛΕΓΜΕΝΑ ΦΙΛΤΡΑ</div>
      <ul className="selected-filters-list">
        {selectedFilters?.selectedCategory && (
          <li className="selected-filter-option">
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
