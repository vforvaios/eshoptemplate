import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import getPercentage from 'library/getPercentage';
import { addToCart } from 'models/actions/cartActions';
import { addProductWishlist } from 'models/actions/wishlistActions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './styles';

const Product = ({ classes, product }) => {
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
            <span>{initialPrice}€</span>
            {price}€
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
          <button
            className="add-to-cart"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addToCart(product));
            }}>
            ΑΓΟΡΑ
          </button>
          <IconButton
            className="product-action"
            aria-label="add to favorites"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addProductWishlist(productId));
            }}>
            <FavoriteBorderIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
};

export default withStyles(styles)(Product);
