import Helper from 'ember-helper';
import { isEmpty } from 'ember-utils';
import CurrencyTypeSymbol from 'ember-cli-uniq/enums/currency-symbol-type';

export function toMoney([params]) {
  return isEmpty(params) ? '' : `${params.amount / 100}${CurrencyTypeSymbol[params.currency_code]}`;
}

export default Helper.helper(toMoney);
