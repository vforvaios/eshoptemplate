/* eslint-disable react-hooks/exhaustive-deps */
import CloseIcon from '@mui/icons-material/Close';
import Search from 'components/searchHeader/Search';
import {
  setSelectedCategory,
  setGeneralLoading,
  setSelectedCategoryAndSubCategory,
} from 'models/actions/catalogActions';
import { getCategoriesMenu } from 'models/actions/categoriesActions';
import { categories } from 'models/selectors/categoriesSelectors';
import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from 'resources/images/logo.jpg';

const MainMenu = ({ setToggleValue }) => {
  const allCategories = useSelector(categories);
  const navigate = useNavigate();
  const myCloseMenuBtn = useRef(null);
  const dispatch = useDispatch();
  const [openSubMenu, setOpenSubMenu] = useState(undefined);

  useEffect(() => {
    dispatch(getCategoriesMenu());
  }, []);

  return (
    <div className="main-menu">
      <div className="main-menu-header">
        <img src={logo} alt="fasdf" className="logo-image" />
        <CloseIcon
          onClick={setToggleValue('left', false)}
          ref={myCloseMenuBtn}
        />
      </div>
      <div className="main-menu-search-container">
        <Search />
      </div>
      <div>
        <ul className="menu-list">
          {allCategories?.map((category) => (
            <li className="menu-item" key={category?.id}>
              <span
                className="menu-item-category"
                onClick={() => {
                  dispatch(setGeneralLoading(true));
                  dispatch(
                    setSelectedCategory({
                      category: category?.id,
                    }),
                  );
                  navigate('./catalog');
                  myCloseMenuBtn.current.dispatchEvent(
                    new MouseEvent('click', {
                      view: window,
                      bubbles: true,
                      cancelable: true,
                      buttons: 1,
                    }),
                  );
                }}>
                {category?.name}
              </span>
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
                      <div
                        key={subCategory.id}
                        onClick={() => {
                          dispatch(setGeneralLoading(true));
                          dispatch(
                            setSelectedCategoryAndSubCategory({
                              category: category?.id,
                              subCategory: subCategory?.id,
                            }),
                          );
                          navigate('./catalog');
                          myCloseMenuBtn.current.dispatchEvent(
                            new MouseEvent('click', {
                              view: window,
                              bubbles: true,
                              cancelable: true,
                              buttons: 1,
                            }),
                          );
                        }}>
                        {subCategory?.name}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
