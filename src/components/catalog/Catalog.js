/* eslint-disable react-hooks/exhaustive-deps */
import CatalogPagination from 'components/catalogPagination/CatalogPagination';
import Filters from 'components/filters/Filters';
import Product from 'components/product/Product';
import SEO from 'components/seo/SEO';
import SortingCatalog from 'components/sortingCatalog/SortingCatalog';
import {
  getInitialCatalog,
  setGeneralLoading,
  setInitialCatalogCategory,
} from 'models/actions/catalogActions';
import { getKeyWords } from 'models/actions/staticActions';
import {
  catalogProducts,
  catalogPagination,
  filters,
  filterCategories,
  filterSubCategories,
  filterBrands,
} from 'models/selectors/catalogSelectors';
import { keywords } from 'models/selectors/staticSelectors';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const Catalog = () => {
  const dispatch = useDispatch();
  const allFilters = useSelector(filters);
  const categoriesFilters = useSelector(filterCategories);
  const subCategoriesFilters = useSelector(filterSubCategories);
  const brandsFilters = useSelector(filterBrands);
  const products = useSelector(catalogProducts);
  const pageKeywords = useSelector(keywords);
  const pagination = useSelector(catalogPagination);
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  useEffect(() => {
    dispatch(setGeneralLoading(true));
    dispatch(getKeyWords('catalog'));
    dispatch(setInitialCatalogCategory(Number(categoryParam)));
    dispatch(getInitialCatalog());
  }, [categoryParam]);

  let concatedTitle = '';
  const category = allFilters?.selectedCategory
    ? categoriesFilters?.find((cat) => cat?.id === allFilters?.selectedCategory)
        ?.name
    : '';

  const subCategory = allFilters?.selectedSubCategory
    ? subCategoriesFilters?.find(
        (subCat) => subCat?.id === allFilters?.selectedSubCategory,
      )?.name
    : '';

  const brand = allFilters?.selectedBrand
    ? brandsFilters?.find((brand) => brand?.id === allFilters?.selectedBrand)
        ?.name
    : '';

  concatedTitle = `${category !== '' ? category : ''} ${
    subCategory !== '' ? subCategory : ''
  } ${brand !== '' ? brand : ''}`;

  return (
    <>
      <SEO
        title={`${process.env.REACT_APP_WEBSITE_NAME} ${concatedTitle}`}
        description={pageKeywords}
        name={process.env.REACT_APP_WEBSITE_NAME}
        type="article"
      />
      <div className="row catalog content">
        <div className="wrapper">
          <div className="grid-container catalog-container">
            <section className="col-right products-section">
              <Filters />
              {products?.length > 0 ? (
                <>
                  <div className="sorting-section">
                    <CatalogPagination pagination={pagination} />
                    <SortingCatalog />
                  </div>
                  <div className="products">
                    <ul className="products-grid">
                      {products?.map((product) => (
                        <li key={product.productId}>
                          <Product product={product} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pagination mr0">
                    <CatalogPagination pagination={pagination} />
                  </div>
                </>
              ) : (
                <div className="products">
                  <h3 className="no-products">
                    No product was found. Please try again.
                  </h3>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
