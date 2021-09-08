import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

const Header = ({ classes }) => {
  console.log(classes);
  return <div>header</div>;
};

export default withStyles(styles)(Header);
