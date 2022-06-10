import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

const Product = ({ classes, product }) => {
  const {
    productId,
    productTitle,
    productSubHeader,
    imgHref,
    productDescription,
  } = product;

  return (
    <Link className="navlink product" to={`/product/${productId}`}>
      <Card className={classes?.root}>
        <CardHeader
          title={productTitle}
          subheader={productSubHeader}
          classes={{
            title: classes.headerTitle,
            subheader: classes.subHeader,
          }}
        />
        <CardMedia className={classes.media} title={productTitle}>
          <div
            className={classes.productImage}
            style={{
              backgroundImage: `url(${imgHref})`,
            }}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {productDescription}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className="card-actions">
          <IconButton className="product-action" aria-label="add to favorites">
            <FavoriteBorderIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
};

export default withStyles(styles)(Product);
