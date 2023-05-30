export const formattedCurrencyConverter = (amount) => {
  if (typeof amount !== "number") {
    return 1;
  }

  const formattedAmount = amount.toLocaleString("en", {
    // style: "currency",
    // useGrouping: true,
    // minimumFractionDigits: 2,
    // maximumFractionDigits: 2,
  });

  return formattedAmount;
};
