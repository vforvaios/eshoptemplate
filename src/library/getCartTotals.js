const getCartTotals = (cart) =>
  cart?.reduce(
    (acc, curr) =>
      Number(acc + curr?.total * Number(curr.price).toFixed(2)).toFixed(2),
    0,
  );

export default getCartTotals;
