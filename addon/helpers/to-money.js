import Helper from '@ember/component/helper';
import { isEmpty, isPresent } from '@ember/utils';
import { inject as service } from '@ember/service';
import toMoney from 'ember-cli-uniq/utils/to-money';

const DEFAULT_LOCALE = 'en-gb';

export default Helper.extend({
  i18n: service('i18n'),

  compute([params], namedArgs) {
    if (isEmpty(params)) {
      return '';
    }

    let locale = this.get('i18n.locale') || DEFAULT_LOCALE;
    let { amount, currency_code } = params;
    let transformedAmount = isPresent(namedArgs.transform) && !namedArgs.transform ? amount * 100 : amount;

    return toMoney(transformedAmount, currency_code, locale);
  }
});
