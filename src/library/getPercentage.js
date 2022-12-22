const getPercentage = (initial, final) =>
  parseFloat(
    100 - (parseFloat(final).toFixed(2) / parseFloat(initial).toFixed(2)) * 100,
  ).toFixed(2);

export default getPercentage;
