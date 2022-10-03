import { getFilterCategories } from 'models/actions/catalogActions';
import { filterCategories } from 'models/selectors/catalogSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Filters = () => {
  const dispatch = useDispatch();
  const categoriesFilters = useSelector(filterCategories);

  useEffect(() => {
    dispatch(getFilterCategories());
  }, []);

  return (
    <div className="filters-container">
      <div className="filter-box">
        <div className="filter-title">ΚΑΤΗΓΟΡΙΕΣ</div>
        <ul className="filter-list">
          {categoriesFilters?.map((category) => (
            <li className="filter-option" key={category?.id}>
              {category?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
