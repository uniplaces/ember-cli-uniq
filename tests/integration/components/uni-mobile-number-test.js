import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, triggerEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni mobile number', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-mobile-number}}`);

    assert.dom('.uni-mobile-number').exists();
  });

  test('it blocks invalid symbols', async function(assert) {
    assert.expect(3);

    await render(hbs`{{uni-mobile-number}}`);

    await fillIn('input', '+');
    await triggerEvent('input', 'keyup');

    assert.dom('input').hasNoValue();

    await fillIn('input', 'e');
    await triggerEvent('input', 'keyup');

    assert.dom('input').hasNoValue();

    await fillIn('input', '123');
    await triggerEvent('input', 'keyup');

    assert.dom('input').hasValue('123');
  });
});
