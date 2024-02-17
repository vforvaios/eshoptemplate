const typography = () => ({
  fontSize: 16,
  h1: {
    fontFamily: 'Sackers Gothic Std',
    fontSize: '28px',
    lineHeight: '40px',
    letterSpacing: 0.3,
  },
  h2: {
    fontFamily: 'Sackers Gothic Std',
    fontSize: '22px',
    lineHeight: '24px',
    letterSpacing: 0.2,
  },
  h3: {
    fontFamily: 'Sackers Gothic Std',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: 0.2,
  },
  h4: {
    fontFamily: 'Sackers Gothic Std',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: 0.3,
  },
  h5: {
    fontFamily: 'Sackers Gothic Std',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: 0.2,
  },
  h6: {
    fontFamily: 'Sackers Gothic Std',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: 0.2,
  },
  body1: {
    fontFamily: 'Sackers Gothic Std',
    fontSize: '16px',
    lineHeight: '32px',
    letterSpacing: 0.3,
  },
  body2: {
    fontFamily: 'Sackers Gothic Std',
    fontSize: '13px',
    lineHeight: '20px',
    letterSpacing: 0.3,
  },
  button: {
    fontFamily: 'Sackers Gothic Std',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: 0.2,
    textTransform: 'none',
  },
  // when link, use overline as well
  overline: {
    fontFamily: 'Sackers Gothic Std',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: 0.4,
  },
  caption: {
    fontFamily: 'Sackers Gothic Std',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: 0,
  },
  // captionSmall: {
  subtitle2: {
    fontFamily: 'Sackers Gothic Std',
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: 0.3,
  },
  // label: {
  subtitle1: {
    fontFamily: 'Sackers Gothic Std',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: 0.3,
  },

  // do not exist in material-ui typography label, captionSmall and link properties
  // maybe override this like this:
  // props: {
  //   MuiTypography: {
  //     variantMapping: {
  //       h1: 'h2',
  //       h2: 'h2',
  //       h3: 'h2',
  //       h4: 'h2',
  //       h5: 'h2',
  //       h6: 'h2',
  //       subtitle1: 'h2',
  //       subtitle2: 'h2',
  //       body1: 'span',
  //       body2: 'span',
  //     },
  //   },
  // },
});

export default typography;
