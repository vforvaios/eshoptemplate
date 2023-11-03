/* eslint-disable react-hooks/exhaustive-deps */
import formatMoney from 'library/formatMoney';
import getPercentage from 'library/getPercentage';
import { addToCart } from 'models/actions/cartActions';
import { setGeneralLoading } from 'models/actions/catalogActions';
import {
  addProductWishlist,
  removeProductWishlist,
} from 'models/actions/wishlistActions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';

const Product = ({ classes, product, isWishlist }) => {
  const {
    productId,
    productTitle,
    productSubHeader,
    imgHref,
    productDescription,
    price,
    initialPrice,
    code,
    stock,
    isNew,
  } = product;

  const dispatch = useDispatch();

  return (
    <Link className="navlink product" to={`/product/${productId}`}>
      <Card className={classes?.root}>
        <div className="media" title={productTitle}>
          {imgHref?.length > 1 ? (
            <div
              className="productImage"
              style={{
                backgroundImage: `url('${process.env.REACT_APP_IMAGES_URL}/${imgHref}')`,
              }}
            />
          ) : (
            <div className="productImage no-image">NO IMAGE</div>
          )}
        </div>
        <div>
          <div className="price-container">
            <span className="discount absolute">
              {getPercentage(initialPrice, price)}%
            </span>
          </div>
          <div className="headerTitle">{productTitle}</div>
          <div className="subHeader">{productSubHeader || ' '}</div>
          <p className="product-description">{productDescription}</p>
          <p className="product-code">
            <span>{code}</span>
          </p>
          <div className="price-container">
            <div>
              <span>{formatMoney.format(initialPrice)}</span>
              {formatMoney.format(price)}
            </div>
          </div>
          <p className={`in-stock ${stock === 0 ? 'not' : ''}`}>
            <span>{stock > 0 ? 'Διαθέσιμο' : 'Μη διαθέσιμο'}</span>
          </p>
          {isNew ? <span className="is-new mb0">ΝΕΟ</span> : null}
        </div>
        <div disableSpacing className="card-actions">
          {stock > 0 ? (
            <button
              className="add-to-cart"
              onClick={(e) => {
                e.preventDefault();
                dispatch(addToCart(product));
              }}>
              ΑΓΟΡΑ
            </button>
          ) : (
            <span>&nbsp;</span>
          )}

          {!isWishlist ? (
            <div
              className="product-action"
              aria-label="add to favorites"
              onClick={(e) => {
                e.preventDefault();
                dispatch(setGeneralLoading(true));
                dispatch(addProductWishlist(productId));
              }}>
              <i class="icon-heart-empty" />
            </div>
          ) : (
            <div
              className="product-action"
              aria-label="remove from favorites"
              onClick={(e) => {
                e.preventDefault();
                dispatch(setGeneralLoading(true));
                dispatch(removeProductWishlist(productId));
              }}>
              <i className="icon-trash-empty" />
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default withStyles(styles)(Product);
