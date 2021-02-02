export const getTotalCost = (cartItems) => {
  const cost = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  let discountRate =
    cost > 150000 ? 0.2 : cost > 100000 ? 0.15 : cost > 50000 ? 0.1 : 0;

  const calculatedCost = cost - cost * discountRate;
  const deliveryFee = cost > 50000 ? 0 : 2500;
  return {
    cost,
    calculatedCost,
    discountRate,
    deliveryFee,
  };
};
