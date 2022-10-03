import {
  getFilterCategories,
  setSelectedFilter,
  setCatalogLoading,
} from 'models/actions/catalogActions';
import { filterCategories, filters } from 'models/selectors/catalogSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CatalogSelectedFilter from './CatalogSelectedFilter';

const Filters = () => {
  const dispatch = useDispatch();
  const categoriesFilters = useSelector(filterCategories);
  const allFilters = useSelector(filters);

  useEffect(() => {
    dispatch(getFilterCategories());
  }, []);

  return (
    <div className="filters-container">
      {allFilters?.selectedCategory && (
        <CatalogSelectedFilter
          categories={categoriesFilters}
          selectedFilters={allFilters}
        />
      )}
      <div className="filter-boxes">
        <div className="filter-box">
          <div className="filter-title">ΚΑΤΗΓΟΡΙΕΣ</div>
          <ul className="filter-list">
            {categoriesFilters?.map((category) => (
              <li
                onClick={() => {
                  dispatch(setCatalogLoading(true));
                  dispatch(
                    setSelectedFilter({
                      type: 'selectedCategory',
                      value: category?.id,
                    }),
                  );
                }}
                className={`filter-option ${
                  allFilters?.selectedCategory === category.id ? 'active' : ''
                }`}
                key={category?.id}>
                {category?.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
