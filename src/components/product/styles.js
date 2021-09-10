const styles = ({ breakpoints }) => ({
  root: { width: '100%', [breakpoints.up('sm')]: { width: '33.33%' } },
  media: { width: '100%', height: 400 },
});

export default styles;
