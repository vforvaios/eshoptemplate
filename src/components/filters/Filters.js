import Slider from '@material-ui/core/Slider';
import {
  getFilterCategories,
  getFilterSubCategories,
  setSelectedFilter,
  setCatalogLoading,
  getPricesRange,
  getCatalogWithPrices,
  setSelectedFilterPriceRange,
} from 'models/actions/catalogActions';
import {
  filterCategories,
  filters,
  filterSubCategories,
  filterPricesRange,
} from 'models/selectors/catalogSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CatalogSelectedFilter from './CatalogSelectedFilter';

const valuetext = (value) => `${value}€`;

const Filters = () => {
  const dispatch = useDispatch();
  const categoriesFilters = useSelector(filterCategories);
  const subCategoriesFilters = useSelector(filterSubCategories);
  const allFilters = useSelector(filters);
  const pricesRange = useSelector(filterPricesRange);
  const { minprice, maxprice } = pricesRange;

  useEffect(() => {
    dispatch(getFilterCategories());
    dispatch(getFilterSubCategories());
    dispatch(getPricesRange());
  }, []);

  return (
    <div className="filters-container">
      {(allFilters?.selectedCategory || allFilters?.selectedSubCategory) && (
        <CatalogSelectedFilter
          categories={categoriesFilters}
          subCategories={subCategoriesFilters}
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

        {/* SUB CATEGORIES */}
        <div className="filter-box">
          <div className="filter-title">ΥΠΟΚΑΤΗΓΟΡΙΕΣ</div>
          <ul className="filter-list">
            {subCategoriesFilters?.map((subCategory) => (
              <li
                onClick={() => {
                  dispatch(setCatalogLoading(true));
                  dispatch(
                    setSelectedFilter({
                      type: 'selectedSubCategory',
                      value: subCategory?.id,
                    }),
                  );
                }}
                className={`filter-option ${
                  allFilters?.selectedSubCategory === subCategory.id
                    ? 'active'
                    : ''
                }`}
                key={subCategory?.id}>
                {subCategory?.name}
              </li>
            ))}
          </ul>
        </div>

        {/* PRICES */}
        <div className="filter-box">
          <div className="filter-title">ΕΥΡΟΣ ΤΙΜΩΝ</div>
          <div className="filter-list prices">
            <Slider
              getAriaLabel={() => 'ευρώ'}
              value={[
                allFilters?.selectedPriceRange[0] || minprice,
                allFilters?.selectedPriceRange[1] || maxprice,
              ]}
              min={minprice}
              max={maxprice}
              onChange={(event, newValue) => {
                dispatch(
                  setSelectedFilterPriceRange({
                    type: 'selectedPriceRange',
                    value: newValue,
                  }),
                );
              }}
              onChangeCommitted={(event, value) => {
                dispatch(getCatalogWithPrices());
              }}
              valueLabelDisplay="on"
              getAriaValueText={valuetext}
              marks={[
                {
                  value: minprice,
                  label: `${minprice}€`,
                },
                {
                  value: maxprice,
                  label: `${maxprice}€`,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
