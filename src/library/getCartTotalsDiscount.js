const getCartTotalsDiscount = (cart) =>
  cart?.reduce(
    (acc, curr) =>
      acc +
      curr?.total *
        (parseFloat(curr?.initialPrice).toFixed(2) -
          parseFloat(curr?.price).toFixed(2)),
    0,
  );

export default getCartTotalsDiscount;
