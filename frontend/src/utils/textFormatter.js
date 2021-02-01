export const formatCurrency = (price) =>
  price.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

export const formatName = (name) => {
  const namesArr = name.split(",");
  return [namesArr[0], ",", <br />, namesArr[1]];
};
