const styles = ({ breakpoints }) => ({
  root: {
    position: 'relative',
    width: '100%',
    '& .MuiCardHeader-root': {
      display: 'flex',
      alignItems: 'center',
      padding: 12,
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
});

export default styles;
