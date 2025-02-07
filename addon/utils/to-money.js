export default function toMoney(amount, currencyCode = 'EUR', locale = 'en-gb', fractionDigits = 0) {
  return Intl.NumberFormat(
    currencyCode === 'TRY' ? 'tr-TR' : locale,
    {
      style: 'currency',
      currency: currencyCode,
      maximumFractionDigits: fractionDigits,
      minimumFractionDigits: 0,
      useGrouping: false
    }
  )
    .format(amount / 100)
    .replace(/\s/g, '');
}
