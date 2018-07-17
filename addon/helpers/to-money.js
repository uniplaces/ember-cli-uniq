import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import toMoneyUtil from 'ember-cli-uniq/utils/to-money';

export function toMoney([params]) {
  return isEmpty(params) ? '' : toMoneyUtil(params.amount, params.currency_code);
}

export default helper(toMoney);
