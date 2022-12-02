/* eslint-disable react-hooks/exhaustive-deps */
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
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

import styles from './styles';

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
  } = product;

  const dispatch = useDispatch();

  return (
    <Link className="navlink product" to={`/product/${productId}`}>
      <Card className={classes?.root}>
        <CardHeader
          title={productTitle}
          subheader={productSubHeader}
          classes={{
            title: 'headerTitle',
            subheader: 'subHeader',
          }}
        />
        <div className="price-container">
          <div>
            <span>{formatMoney.format(initialPrice)}</span>
            {formatMoney.format(price)}
          </div>
          <span className="discount">
            {getPercentage(initialPrice, price)}%
          </span>
        </div>
        <CardMedia className={classes.media} title={productTitle}>
          <div
            className="productImage"
            style={{
              backgroundImage: `url(${imgHref})`,
            }}
          />
        </CardMedia>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="product-description">
            {productDescription}
          </Typography>
          <Typography variant="body2" component="p" className="product-code">
            <span>{code}</span>
          </Typography>
          <p className={`in-stock ${stock === 0 ? 'not' : ''}`}>
            <span>{stock > 0 ? 'Διαθέσιμο' : 'Μη διαθέσιμο'}</span>
          </p>
        </CardContent>
        <CardActions disableSpacing className="card-actions">
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
            <IconButton
              className="product-action"
              aria-label="add to favorites"
              onClick={(e) => {
                e.preventDefault();
                dispatch(setGeneralLoading(true));
                dispatch(addProductWishlist(productId));
              }}>
              <FavoriteBorderIcon />
            </IconButton>
          ) : (
            <IconButton
              className="product-action"
              aria-label="remove from favorites"
              onClick={(e) => {
                e.preventDefault();
                dispatch(setGeneralLoading(true));
                dispatch(removeProductWishlist(productId));
              }}>
              <DeleteForeverIcon />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Link>
  );
};

export default withStyles(styles)(Product);
