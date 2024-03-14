/* eslint-disable react-hooks/exhaustive-deps */
import {
  setSelectedCategory,
  setGeneralLoading,
  setSelectedCategoryAndSubCategory,
} from 'models/actions/catalogActions';
import { getCategoriesMenu } from 'models/actions/categoriesActions';
import { categories } from 'models/selectors/categoriesSelectors';
import { logo } from 'models/selectors/homeSelectors';
import { staticPagesInMenu } from 'models/selectors/staticSelectors';
import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const MainMenu = ({ setToggleValue }) => {
  const allCategories = useSelector(categories);
  const logoImage = useSelector(logo);
  const staticPages = useSelector(staticPagesInMenu);
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
        <div>
          <Link to="/" onClick={setToggleValue('top', false)}>
            <img
              src={`${process.env.REACT_APP_IMAGES_URL}/${logoImage?.data?.name}`}
              alt={logoImage?.data?.name}
              className="logo-image"
            />
          </Link>
        </div>
        <i
          className="icon-cancel-circled closeMenu"
          onClick={setToggleValue('top', false)}
          ref={myCloseMenuBtn}
        />
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
              {process.env.REACT_APP_SHOWSUBCATEGORIESMENU &&
                process.env.REACT_APP_SHOWSUBCATEGORIESMENU === 'true' &&
                category?.subCategories?.length > 0 && (
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
          {staticPages?.map((page, index) => (
            <li className="menu-item" key={`${page?.id}_${index}`}>
              <span onClick={() => navigate(`./static/${page?.id}`)}>
                {page?.title
                  .toUpperCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
