import CloseIcon from '@material-ui/icons/Close';
import { getCategories } from 'models/actions/categoriesActions';
import { categories } from 'models/selectors/categoriesSelectors';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const MainMenu = ({ setToggleValue }) => {
  const allCategories = useSelector(categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <CloseIcon onClick={setToggleValue('left', false)} />
      <div>Menu</div>
      <ul>
        {allCategories?.map((category) => (
          <li key={category?.id}>{category?.name}</li>
        ))}
        <li>
          <Link onClick={setToggleValue('left', false)} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/catalog">
            Catalog
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/cart">
            Cart
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/categories">
            Categories Landing
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/checkout/confirm">
            Confirm
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/checkout/success">
            Checkout Success
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/wishlist">
            Wishlist
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/register">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
