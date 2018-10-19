import arrayMethods from 'dummy/utils/array-methods';
import { module, test } from 'qunit';

module('Unit | Utility | array methods', function() {
  test('it works', function(assert) {
    assert.expect(2);

    let arraySize = 5;
    let result = arrayMethods(0, arraySize);

    assert.ok(result);
    assert.equal(result.length - 1, arraySize);
  });
});
