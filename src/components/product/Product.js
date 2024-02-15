/* eslint-disable react-hooks/exhaustive-deps */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { withStyles } from '@mui/styles';
import formatMoney from 'library/formatMoney';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './styles';

const Product = ({ classes, product, isWishlist }) => {
  const {
    productId,
    productTitle,
    imgHref,
    price,
    initialPrice,
    isNew,
  } = product;

  const dispatch = useDispatch();

  return (
    <Link className="navlink product" to={`/product/${productId}`}>
      <Card className={classes?.root}>
        <CardMedia className={classes.media} title={productTitle}>
          {imgHref?.length > 1 ? (
            <div className="productImage">
              <img
                alt={productTitle}
                title={productTitle}
                // TODO - REMOVE
                // src={`${process.env.REACT_APP_IMAGES_URL}/${
                src={`${process.env.PUBLIC_URL}/${imgHref.indexOf('#') !== -1
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

      </Card>
    </Link>
  );
};

export default withStyles(styles)(Product);
