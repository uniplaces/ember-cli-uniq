import isValidPhoneNumber from 'dummy/utils/is-valid-phone-number';
import CountryCodes from 'ember-cli-uniq/enums/country-codes-type';
import { module, test } from 'qunit';

module('Unit | Utility | is valid phone number', function() {
  test('it works with valid number', function(assert) {
    let result = isValidPhoneNumber(CountryCodes.PT, 916124194);

    assert.ok(result);
  });

  test('it works with invalid number prefix', function(assert) {
    let result = isValidPhoneNumber(CountryCodes.PT, 116124194);

    assert.notOk(result);
  });

  test('it works with invalid number length', function(assert) {
    let result = isValidPhoneNumber(CountryCodes.PT, 116124123123194);

    assert.notOk(result);
  });

  test('it works with other country codes', function(assert) {
    let result = isValidPhoneNumber(CountryCodes.IT, 116124123123194);

    assert.ok(result);
  });
});
