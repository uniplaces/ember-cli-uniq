import toMoney from 'dummy/utils/to-money';
import { module, test } from 'qunit';
import CurrencyType from 'ember-cli-uniq/enums/currency-type';

module('Unit | Utility | to money', function() {
  Object.keys(CurrencyType).forEach((currency) => {
    test(`It works with ${currency} with default locale (pt-pt)`, function(assert) {
      assert.expect(2);

      let result = toMoney(10000, currency);

      assert.ok(result);
      assert.ok(result.includes('100'));
    });

    test(`It works with ${currency} with custom locale (en-gb)`, function(assert) {
      assert.expect(2);

      let result = toMoney(200000, currency, 'en-gb');

      assert.ok(result);
      assert.ok(result.includes('2000'));
    });

    test(`It works with fractionDigits`, function(assert) {
      assert.expect(2);

      let result = toMoney(19999, currency, 'en-gb', 2);

      assert.ok(result);
      assert.ok(result.includes('199.99'));
    });

    test(`It works with fractionDigits`, function(assert) {
      assert.expect(2);

      let result = toMoney(200000, currency, 'en-gb', 2);

      assert.ok(result);
      assert.ok(result.includes('2000'));
    });
  });
});
