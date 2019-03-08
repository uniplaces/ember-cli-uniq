import Helper from '@ember/component/helper';
import { isEmpty, isPresent } from '@ember/utils';
import { inject as service } from '@ember/service';
import toMoney from 'ember-cli-uniq/utils/to-money';

export default Helper.extend({
  intl: service('intl'),

  compute([params], namedArgs) {
    if (isEmpty(params)) {
      return '';
    }

    let locale = this.get('intl.primaryLocale');
    let { amount, currency_code } = params;
    let transformedAmount = isPresent(namedArgs.transform) && !namedArgs.transform ? amount * 100 : amount;

    return toMoney(transformedAmount, currency_code, locale);
  }
});
