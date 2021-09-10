import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';

import styles from './styles';

const Product = ({ classes }) => (
  <Card className={classes?.root}>
    <CardHeader
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      className={classes.media}
      image="https://via.placeholder.com/400x400"
      title="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </CardContent>
  </Card>
);

export default withStyles(styles)(Product);
