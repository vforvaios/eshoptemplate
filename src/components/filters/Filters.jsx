import Drawer from '@mui/material/Drawer';
import Slider from '@mui/material/Slider';
import { withToggle } from '@/library';
import formatMoney from '@/library/formatMoney';
import {
  setSelectedFilter,
  setGeneralLoading,
  getCatalogWithPrices,
  setSelectedFilterPriceRange,
} from '@/models/actions/catalogActions';
import {
  filterCategories,
  filterSubCategories,
  filters,
  filterBrands,
  filterPricesRange,
} from '@/models/selectors/catalogSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CatalogSelectedFilter from './CatalogSelectedFilter';

const valuetext = (value) => `${value}€`;

const Filters = ({ toggleValue, setToggleValue }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoriesFilters = useSelector(filterCategories);
  const subCategoriesFilters = useSelector(filterSubCategories);
  const brandsFilters = useSelector(filterBrands);
  const allFilters = useSelector(filters);
  const pricesRange = useSelector(filterPricesRange);
  const { minprice, maxprice } = pricesRange;

  return (
    <>
      <button
        onClick={setToggleValue('left', true)}
        className="button next filter-toggle">
        Filters
      </button>

      <Drawer
        anchor="left"
        open={toggleValue?.left}
        onClose={setToggleValue('left', false)}
        sx={{
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: 340,
            backgroundColor: '#fff!important',
          },
        }}>
        <div>
          <button
            className="filter-toggle"
            onClick={setToggleValue('left', false)}>
            <i className="icon-cancel-circled" />
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
            {/* PRICES */}
            <div className="filter-box">
              <div className="filter-title">PRICE RANGE</div>
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
                      label: `${formatMoney.format(minprice)}`,
                    },
                    {
                      value: maxprice,
                      label: `${formatMoney.format(maxprice)}`,
                    },
                  ]}
                />
              </div>
            </div>
            <div className="filter-box">
              <div className="filter-title">CATEGORIES</div>
              <ul className="filter-list">
                {categoriesFilters?.map((category) => (
                  <li
                    onClick={() => {
                      navigate(`/catalog?category=${category?.id}`);
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
            {import.meta.env.VITE_ENABLE_SUBCATEGORIES &&
              import.meta.env.VITE_ENABLE_SUBCATEGORIES === 'true' && (
                <div className="filter-box">
                  <div className="filter-title">SUB-CATEGORIES</div>
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
              )}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default withToggle(Filters);
