import Helper from '@ember/component/helper';
import { getOwner } from '@ember/application';
import { isEmpty, isPresent } from '@ember/utils';
import toMoney from 'ember-cli-uniq/utils/to-money';

const DEFAULT_LOCALE = 'en-gb';
const DEFAULT_FRACTION_DIGITS = 0;

export default Helper.extend({
  _getLocale() {
    let owner = getOwner(this);
    let intlService = owner.lookup('service:intl');
    if (isPresent(intlService)) {
      return intlService.get('primaryLocale');
    }

    let i18nService = owner.lookup('service:i18n');
    if (isPresent(i18nService)) {
      return i18nService.get('locale');
    }

    return DEFAULT_LOCALE;
  },

  compute([params], namedArgs) {
    if (isEmpty(params)) {
      return '';
    }

    let locale = this._getLocale();
    let { amount, currency_code } = params;
    let fractionDigits = namedArgs.fractionDigits || DEFAULT_FRACTION_DIGITS;
    let transformedAmount = isPresent(namedArgs.transform) && !namedArgs.transform ? amount * 100 : amount;

    return toMoney(transformedAmount, currency_code, locale, fractionDigits);
  }
});
