import i18nToCoreLocale from 'dummy/utils/i18n-to-core-locale';
import { module, test } from 'qunit';

module('Unit | Utility | i18n to core locale');

test('It works', function(assert) {
  let result = i18nToCoreLocale('en-gb');

  assert.ok(result);
  assert.equal(result, 'en_GB');
});
