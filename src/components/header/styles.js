const styles = ({ spacing, palette }) => ({
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing(1),
    background: palette?.black,
    '& > div': { color: palette?.white },
  },
  menuIcon: {
    fill: palette?.white,
    width: 30,
    height: 30,
    cursor: 'pointer',
  },
});

export default styles;
