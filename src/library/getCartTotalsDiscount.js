const getCartTotalsDiscount = (cart) => {
  return cart?.reduce((acc, curr) => {
    const discount =
      curr?.initialPrice !== 'undefined' && curr?.initialPrice > 0
        ? curr?.total *
          (parseFloat(curr?.initialPrice) - parseFloat(curr?.price))
        : 0;

    return acc + discount;
  }, 0);
};

export default getCartTotalsDiscount;
