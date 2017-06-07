import CurrencyTypeSymbol from 'ember-cli-uniq/enums/currency-symbol-type';

export default function toMoney(amount, currencyCode) {
  return `${amount / 100}${CurrencyTypeSymbol[currencyCode]}`;
}
