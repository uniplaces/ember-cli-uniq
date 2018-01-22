import CurrencyTypeSymbol from 'ember-cli-uniq/enums/currency-symbol-type';

const LEFT_DISPLAYED_CURRENCIES = ['GBP'];

export default function toMoney(amount, currencyCode) {
  return LEFT_DISPLAYED_CURRENCIES.includes(currencyCode)
    ? `${CurrencyTypeSymbol[currencyCode]}${amount / 100}`
    : `${amount / 100}${CurrencyTypeSymbol[currencyCode]}`;
}
