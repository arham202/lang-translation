export const formatCurrency = (amount, locale = "en-IN", currency = "INR") => {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    amount
  );
};
