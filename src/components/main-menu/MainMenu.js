import CloseIcon from '@material-ui/icons/Close';
import { getCategoriesMenu } from 'models/actions/categoriesActions';
import { categories } from 'models/selectors/categoriesSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const MainMenu = ({ setToggleValue }) => {
  const allCategories = useSelector(categories);

  const dispatch = useDispatch();
  const [openSubMenu, setOpenSubMenu] = useState(undefined);

  useEffect(() => {
    dispatch(getCategoriesMenu());
  }, []);

  return (
    <div className="main-menu">
      <CloseIcon onClick={setToggleValue('left', false)} />
      <div>Menu</div>
      <ul>
        {allCategories?.map((category, index) => (
          <li className="menu-item" key={category?.id}>
            {category?.name}
            {category?.subCategories?.length > 0 && (
              <>
                <span
                  className={`submenu-item ${
                    openSubMenu === category?.id && 'rotate'
                  }`}>
                  <i
                    className="icon-down-dir"
                    onClick={() => setOpenSubMenu(category?.id)}
                  />
                </span>
                <div
                  className={`submenu-container ${
                    openSubMenu === category?.id && 'open'
                  }`}>
                  {category?.subCategories?.map((subCategory) => (
                    <div key={subCategory.id}>{subCategory?.name}</div>
                  ))}
                </div>
              </>
            )}
          </li>
        ))}
        {/* <li>
          <Link onClick={setToggleValue('left', false)} to="/">
            ΑΡΧΙΚΗ
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/about">
            ΓΙΑ ΕΜΑΣ
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/catalog">
            ΠΡΟΙΟΝΤΑ
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/cart">
            ΚΑΛΑΘΙ
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/contact">
            ΕΠΙΚΟΙΝΩΝΙΑ
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/categories">
            ΚΑΤΗΓΟΡΙΕΣ
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/checkout/confirm">
            CHECKOUT CONFIRM
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/checkout/success">
            CHECKOUT SUCCESS
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/wishlist">
            ΑΓΑΠΗΜΕΝΑ
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/login">
            ΕΙΣΟΔΟΣ
          </Link>
        </li>
        <li>
          <Link onClick={setToggleValue('left', false)} to="/register">
            ΕΓΓΡΑΦΗ
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default MainMenu;
