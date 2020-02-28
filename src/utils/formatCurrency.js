/**
 * Returns the number passed to the function formated as a currency
 *
 * @method formatCurrency
 * @param {Number} amount Number to format
 * @param {Number} decimals Number of decimals used to round the amount
 * @return {String} Formatted amount
 */
export default function formatCurrency(amount, decimals = 2) {
  const formatted = Number(amount)
    .toFixed(decimals)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return `$${formatted}`;
}
