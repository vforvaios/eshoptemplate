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

const Product = ({ classes, id }) => (
  <Link className="navlink product" to={`/product/${id}`}>
    <Card className={classes?.root}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        classes={{
          title: classes.headerTitle,
          subheader: classes.subHeader,
        }}
      />
      <CardMedia className={classes.media} title="Paella dish">
        <div
          className={classes.productImage}
          style={{
            backgroundImage: `url('https://via.placeholder.com/400x400')`,
          }}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
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

export default withStyles(styles)(Product);
