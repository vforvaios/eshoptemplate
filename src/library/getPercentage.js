const getPercentage = (initial, final) =>
  Number(100 - (final / initial) * 100).toFixed(2);

export default getPercentage;
