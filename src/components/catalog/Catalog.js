import CatalogPagination from 'components/catalogPagination/CatalogPagination';
import Filters from 'components/filters/Filters';
import Product from 'components/product/Product';
import SortingCatalog from 'components/sortingCatalog/SortingCatalog';
import {
  getInitialCatalog,
  setCatalogLoading,
} from 'models/actions/catalogActions';
import {
  catalogProducts,
  catalogPagination,
  catalogIsLoading,
} from 'models/selectors/catalogSelectors';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CatalogLoading from './CatalogLoading';

const Catalog = () => {
  const dispatch = useDispatch();
  const products = useSelector(catalogProducts);
  const loading = useSelector(catalogIsLoading);

  const pagination = useSelector(catalogPagination);

  useEffect(() => {
    dispatch(setCatalogLoading(true));
    dispatch(getInitialCatalog());
  }, []);

  return (
    <>
      {loading && <CatalogLoading />}
      <div className="row catalog content">
        <div className="wrapper">
          <div className="grid-container catalog-container">
            <section className="col-left filters">
              <Filters />
            </section>
            <section className="col-right products-section">
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
                  <div className="pagination">
                    <CatalogPagination pagination={pagination} />
                  </div>
                </>
              ) : (
                <div className="products">
                  <h3 className="no-products">
                    Δεν βρέθηκε προϊόν. Αλλάξτε την αναζήτησή σας!
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
