import Helper from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import toMoneyUtil from 'ember-cli-uniq/utils/to-money';
import { inject as service } from '@ember/service';

const DEFAULT_LOCALE = 'pt-pt';

export default Helper.extend({
  i18n: service('i18n'),

  compute([params]) {
    let i18n = this.get('i18n');

    if (isEmpty(params)) {
      return '';
    }

    let locale = i18n.get('locale') || DEFAULT_LOCALE;
    let { amount, currency_code } = params;

    return toMoneyUtil(amount, currency_code, locale);
  }
});
