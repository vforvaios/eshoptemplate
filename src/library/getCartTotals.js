const getCartTotals = (cart) =>
  cart?.reduce((acc, curr) => acc + curr?.total * curr.price, 0);

export default getCartTotals;
