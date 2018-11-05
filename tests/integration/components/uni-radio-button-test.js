import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni radio button', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.set('label', 'This is a default label');
  });

  test('It renders', async function(assert) {
    assert.expect(4);

    await render(hbs`{{uni-radio-button label=label}}`);

    assert.dom('.uni-radio-button').exists();
    assert.dom('.uni-radio-button input').isNotDisabled();
    assert.dom('label').exists();
    assert.dom('label').hasText('This is a default label');
  });

  test('It renders as disabled', async function(assert) {
    assert.expect(2);

    this.set('isDisabled', true);

    await render(hbs`{{uni-radio-button label=label isDisabled=isDisabled}}`);

    assert.dom('.uni-radio-button--disabled').exists();
    assert.dom('.uni-radio-button input').isDisabled();
  });

  test('It renders as checked when the groupValue is the same as the value', async function(assert) {
    assert.expect(1);

    this.set('groupValue', 'javascript');
    this.set('value', 'javascript');

    await render(hbs`{{uni-radio-button label=label value=value groupValue=groupValue}}`);

    assert.dom('.uni-radio-button input').isChecked();
  });

  test('It renders as unchecked when the groupValue is different than the value', async function(assert) {
    assert.expect(1);

    this.set('groupValue', 'javascript');
    this.set('value', 'php');

    await render(hbs`{{uni-radio-button label=label value=value groupValue=groupValue}}`);

    assert.dom('.uni-radio-button input').isNotChecked();
  });

  test('It triggers the onClick action with correct arguments', async function(assert) {
    assert.expect(1);

    this.set('groupValue', 'javascript');
    this.set('value', 'php');
    this.set('hasChanged', (value) => assert.equal(value, 'php'));

    await render(hbs`{{uni-radio-button label=label value=value groupValue=groupValue hasChanged=hasChanged}}`);

    await click('input');
  });
});
