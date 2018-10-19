import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerKeyEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import KeyCodesType from 'ember-cli-uniq/enums/key-codes-type';

module('Integration | Component | uni input price', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-input-price}}`);

    assert.dom('.uni-input-price').exists();
  });

  test('it renders right side currency', async function(assert) {
    assert.expect(1);

    this.set('isRightSideCurrency', true);
    this.set('per', 'day');
    this.set('currency', '€');

    await render(hbs`{{uni-input-price currency=currency isRightSideCurrency=isRightSideCurrency per=per}}`);

    assert.dom('.uni-input-price').hasText('€ / day');
  });

  test('it execute onInvalidInput on not valid input', async function(assert) {
    assert.expect(2);

    this.set('isRightSideCurrency', true);
    this.set('per', 'day');
    this.set('currency', '€');
    this.set('value', 0);
    this.set('minValue', 100);
    this.set('onInvalidInput', () => {
      assert.equal(true, true);
    });

    await render(hbs`
      {{uni-input-price
        currency=currency
        minValue=minValue
        isRightSideCurrency=isRightSideCurrency
        per=per
        value=value
        onInvalidInput=onInvalidInput}}
    `);
    await triggerKeyEvent('input', 'keyup', KeyCodesType.DOWN_ARROW);

    assert.dom('.uni-input-price').hasText('€ / day');
  });
});
