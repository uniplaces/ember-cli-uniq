import { toMoney } from 'dummy/helpers/to-money';
import { module, test } from 'qunit';

module('Unit | Helper | to money');

test('It works with EUR', function(assert) {
  assert.expect(2);

  let result = toMoney([{ amount: 10000, currency_code: 'EUR' }]);

  assert.ok(result);
  assert.equal(result, '100€');
});

test('It works with GBP', function(assert) {
  assert.expect(2);

  let result = toMoney([{ amount: 10000, currency_code: 'GBP' }]);

  assert.ok(result);
  assert.equal(result, '100£');
});

test('It returns empty string on undefined', function(assert) {
  assert.expect(1);

  let result = toMoney([]);

  assert.equal(result, '');
});
