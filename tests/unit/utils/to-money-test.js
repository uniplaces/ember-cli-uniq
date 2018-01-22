import toMoney from 'dummy/utils/to-money';
import { module, test } from 'qunit';

module('Unit | Utility | to money');

test('It works with EUR', function(assert) {
  assert.expect(2);

  let result = toMoney(10000, 'EUR');

  assert.ok(result);
  assert.equal(result, '100€');
});

test('It works with GBP', function(assert) {
  assert.expect(2);

  let result = toMoney(10000, 'GBP');

  assert.ok(result);
  assert.equal(result, '£100');
});
