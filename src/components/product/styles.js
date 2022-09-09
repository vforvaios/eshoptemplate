const styles = ({ breakpoints }) => ({
  root: {
    position: 'relative',
    width: '100%',
    '& .MuiCardHeader-root': {
      paddingRight: 64,
      display: 'flex',
      alignItems: 'center',
      padding: 8,
    },
    '& .MuiCardContent-root': {
      position: 'relative',
      paddingTop: 24,
    },
  },
  media: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    [breakpoints.up('sm')]: {
      height: 400,
    },
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    lineClamp: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    boxOrient: 'vertical',
  },
  subHeader: {
    fontSize: 12,
    color: '#aaa',
  },
  productImage: {
    transition: 'all 0.2s ease-in-out',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
  },
});

export default styles;
