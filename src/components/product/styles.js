const styles = ({ breakpoints }) => ({
  root: {
    position: 'relative',
    width: '100%',
    '& .MuiCardHeader-root': {
      paddingRight: 64,
      display: 'flex',
      alignItems: 'center',
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
