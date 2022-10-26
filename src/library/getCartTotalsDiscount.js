const getCartTotalsDiscount = (cart) =>
  cart?.reduce(
    (acc, curr) => acc + curr?.total * (curr?.initialPrice - curr?.price),
    0,
  );

export default getCartTotalsDiscount;
