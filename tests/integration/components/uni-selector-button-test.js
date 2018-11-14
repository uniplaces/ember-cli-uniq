import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_LABEL = 'Option';
const DEFAULT_VALUE = 'option';

module('Integration | Component | uni selector button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-selector-button}}`);

    assert.dom('.uni-multi-selector__button').exists();
  });

  test('it renders checked', async function(assert) {
    assert.expect(2);

    this.set('label', DEFAULT_LABEL);
    this.set('checked', true);

    await render(hbs`{{uni-selector-button label=label checked=checked}}`);

    assert.dom('label').hasText(DEFAULT_LABEL);
    assert.dom('svg').exists();
  });

  test('it renders unchecked', async function(assert) {
    assert.expect(2);

    this.set('label', DEFAULT_LABEL);
    this.set('checked', false);

    await render(hbs`{{uni-selector-button label=label checked=checked}}`);

    assert.dom('label').hasText(DEFAULT_LABEL);
    assert.dom('svg').doesNotExist();
  });

  test('it renders error', async function(assert) {
    assert.expect(2);

    this.set('label', DEFAULT_LABEL);
    this.set('error', true);
    this.set('groupValue', DEFAULT_VALUE);
    this.set('value', DEFAULT_VALUE);

    await render(
      hbs`{{uni-selector-button label=label error=error value=value groupValue=groupValue}}`
    );

    assert.dom('label').hasText(DEFAULT_LABEL);
    assert.dom('.uni-multi-selector__button--error').exists();
  });
});
