import { isEmpty } from '@ember/utils';
import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import toMoney from 'ember-cli-uniq/utils/to-money';

const DEFAULT_LOCALE = 'en-gb';

export default Helper.extend({
  i18n: service('i18n'),

  compute([params]) {
    let i18n = this.get('i18n');

    if (isEmpty(params)) {
      return '';
    }

    let locale = i18n.get('locale') || DEFAULT_LOCALE;
    let { amount, currency_code } = params;

    return toMoney(amount, currency_code, locale);
  }
});
