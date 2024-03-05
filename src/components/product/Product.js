/* eslint-disable react-hooks/exhaustive-deps */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { withStyles } from '@mui/styles';
import formatMoney from 'library/formatMoney';
import { addToCart } from 'models/actions/cartActions';
import { removeProductWishlist } from 'models/actions/wishlistActions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './styles';

const Product = ({ classes, product, isWishlist }) => {
  const dispatch = useDispatch();
  const {
    productId,
    productTitle,
    imgHref,
    price,
    initialPrice,
    isNew,
  } = product;

  return (
    <Link className="navlink product" to={`/product/${productId}`}>
      <Card className={classes?.root}>
        <CardMedia className={classes.media} title={productTitle}>
          {imgHref?.length > 1 ? (
            <div className="productImage">
              <img
                alt={productTitle}
                title={productTitle}
                src={`${process.env.REACT_APP_IMAGES_URL}/${
                  imgHref.indexOf('#') !== -1
                    ? imgHref.substr(0, imgHref.indexOf('#'))
                    : imgHref
                }`}
              />
            </div>
          ) : (
            <div className="productImage no-image">NO IMAGE</div>
          )}
        </CardMedia>
        <CardContent>
          <div className="headerTitle">{productTitle}</div>
          <div className="price-container">
            <div>
              {initialPrice && <span>{formatMoney.format(initialPrice)}</span>}
              {formatMoney.format(price)}
            </div>
          </div>
          {isNew ? <span className="is-new mb0">NEW</span> : null}
        </CardContent>
        {isWishlist && (
          <>
            <button
              className="add-to-cart"
              onClick={(e) => {
                e.preventDefault();
                dispatch(addToCart(product));
              }}>
              BUY
            </button>
            <IconButton
              className="product-action"
              aria-label="add to favorites"
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeProductWishlist(product.productId));
              }}>
              <i className="icon-heart-empty" />
            </IconButton>
          </>
        )}
      </Card>
    </Link>
  );
};

export default withStyles(styles)(Product);
