/* eslint new-cap: ["off"] */
export default function toMoney(amount, currencyCode = 'EUR', locale = 'pt-pt') {
  return Intl.NumberFormat(
    locale,
    {
      style: 'currency',
      currency: currencyCode,
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
      useGrouping: false
    }
  )
    .format(amount / 100)
    .replace(/\s/g, '');
}
