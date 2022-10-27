import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Slider from '@material-ui/core/Slider';
import {
  setSelectedFilter,
  setGeneralLoading,
  getCatalogWithPrices,
  setSelectedFilterPriceRange,
} from 'models/actions/catalogActions';
import {
  filterCategories,
  filterSubCategories,
  filters,
  filterBrands,
  filterPricesRange,
} from 'models/selectors/catalogSelectors';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CatalogSelectedFilter from './CatalogSelectedFilter';

const valuetext = (value) => `${value}€`;

const Filters = () => {
  const dispatch = useDispatch();
  const categoriesFilters = useSelector(filterCategories);
  const subCategoriesFilters = useSelector(filterSubCategories);
  const brandsFilters = useSelector(filterBrands);
  const allFilters = useSelector(filters);
  const pricesRange = useSelector(filterPricesRange);
  const { minprice, maxprice } = pricesRange;

  const [toggleFilters, setToggleFilters] = useState(false);

  const handleToggle = (open) => {
    setToggleFilters(open);
  };

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleToggle(true);
        }}
        className="hidden button next filter-toggle">
        ΦΙΛΤΡΑ
      </button>
      <div className={`filters-container ${toggleFilters ? 'open' : ''}`}>
        <ClickAwayListener
          onClickAway={(e) => {
            e.stopPropagation();
            handleToggle(false);
          }}>
          <div>
            <button
              className="hidden button next filter-toggle"
              onClick={() => handleToggle(false)}>
              ΚΛΕΙΣΙΜΟ
            </button>
            {(allFilters?.selectedCategory ||
              allFilters?.selectedSubCategory ||
              allFilters?.selectedBrand) && (
              <CatalogSelectedFilter
                categories={categoriesFilters}
                subCategories={subCategoriesFilters}
                brands={brandsFilters}
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
                        dispatch(setGeneralLoading(true));
                        dispatch(
                          setSelectedFilter({
                            type: 'selectedCategory',
                            value: category?.id,
                          }),
                        );
                      }}
                      className={`filter-option ${
                        allFilters?.selectedCategory === category.id
                          ? 'active'
                          : ''
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
                  {brandsFilters?.map((subCategory) => (
                    <li
                      onClick={() => {
                        dispatch(setGeneralLoading(true));
                        dispatch(
                          setSelectedFilter({
                            type: 'selectedBrand',
                            value: subCategory?.id,
                          }),
                        );
                      }}
                      className={`filter-option ${
                        allFilters?.selectedBrand === subCategory.id
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
                      dispatch(setGeneralLoading(true));
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
        </ClickAwayListener>
      </div>
    </>
  );
};

export default Filters;
