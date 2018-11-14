import { defineProperty } from '@ember/object';
import { empty } from '@ember/object/computed';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, triggerKeyEvent, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import KeyCodesType from 'ember-cli-uniq/enums/key-codes-type';

module('Integration | Component | uni input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-input}}`);

    assert.dom('.uni-input').exists();
  });

  test('it renders error with given error validation', async function(assert) {
    assert.expect(1);

    defineProperty(this, 'showError', empty('value'));

    await render(hbs`{{uni-input showError=showError}}`);

    assert.dom('.uni-input--error').exists();
  });

  test('it renders success with given success validation', async function(assert) {
    assert.expect(1);

    this.set('showSuccess', true);

    await render(hbs`{{uni-input showSuccess=showSuccess}}`);

    assert.dom('.uni-input--success').exists();
  });

  test('it renders error on invalid email', async function(assert) {
    assert.expect(1);

    this.set('value', 'invalid@');
    this.set('type', 'email');

    await render(hbs`{{uni-input value=value type=type}}`);

    assert.dom('.uni-input--error').exists();
  });

  test('it does not render error on invalid email when flag showError is false', async function(assert) {
    assert.expect(2);

    this.set('value', 'invalid-email@');
    this.set('type', 'email');

    await render(hbs`{{uni-input value=value type=type showError=false}}`);

    assert.dom('.uni-input').exists();
    assert.dom('.uni-input--error').doesNotExist();
  });

  test('it renders error with default validations on empty required field', async function(assert) {
    assert.expect(1);

    this.set('value', '');
    this.set('isRequired', true);

    await render(hbs`{{uni-input value=value isRequired=isRequired}}`);

    assert.dom('.uni-input--error').exists();
  });

  test('it renders success with default validations', async function(assert) {
    assert.expect(1);

    this.set('showSuccessDefault', true);

    await render(hbs`{{uni-input showSuccessDefault=showSuccessDefault}}`);

    assert.dom('.uni-input--success').exists();
  });

  test('it doesnt render success with default validations and empty required field', async function(assert) {
    assert.expect(1);

    this.set('isRequired', true);
    this.set('showSuccessDefault', true);

    await render(hbs`{{uni-input isRequired=isRequired showSuccessDefault=showSuccessDefault}}`);

    assert.dom('.uni-input--success').doesNotExist();
  });

  test('it converts numeric value', async function(assert) {
    assert.expect(2);

    this.set('value', '123');
    this.set('type', 'number');

    await render(hbs`{{uni-input value=value type=type}}`);

    assert.dom('input').hasValue('123');
    assert.equal(this.get('value'), 123);
  });

  test('it returns null instead of NaN when the input is empty', async function(assert) {
    assert.expect(2);

    this.set('value', null);
    this.set('type', 'number');

    await render(hbs`{{uni-input value=value type=type}}`);

    assert.dom('input').hasValue('');
    assert.equal(this.get('value'), null);
  });

  test('it calls onKeyUp callback with value and isValid', async function(assert) {
    assert.expect(4);

    this.set('value', null);
    this.set('showError', false);
    this.set('onKeyUp', (value, isValid) => {
      assert.equal(value, 'random text');
      assert.ok(isValid);
    });

    await render(hbs`{{uni-input value=value showError=showError onKeyUp=onKeyUp}}`);

    assert.dom('input').exists();
    assert.dom('.uni-input--error').doesNotExist();

    await fillIn('input', 'random text');
    await triggerKeyEvent('input', 'keyup', KeyCodesType.DOWN_ARROW);
  });

  test('it calls onKeyDown callback with value and isValid', async function(assert) {
    assert.expect(4);

    this.set('value', null);
    this.set('showError', false);
    this.set('onKeyDown', (value, isValid) => {
      assert.equal(value, 'random text');
      assert.ok(isValid);
    });

    await render(hbs`{{uni-input value=value showError=showError onKeyDown=onKeyDown}}`);

    assert.dom('input').exists();
    assert.dom('.uni-input--error').doesNotExist();

    await fillIn('input', 'random text');
    await triggerKeyEvent('input', 'keydown', KeyCodesType.DOWN_ARROW);
  });

  test('it triggers the email validation after the user inputs an invalid value', async function(assert) {
    assert.expect(3);

    this.set('value', 'this-is-an-invalid-email@');
    this.set('type', 'email');
    this.set('showError', false);
    this.set('onKeyUp', (value, isValid) => {
      this.set('showError', !isValid);

      assert.notOk(isValid, 'The current value is not valid');
    });

    await render(hbs`{{uni-input value=value type=type showError=showError onKeyUp=onKeyUp}}`);

    assert.dom('.uni-input--error').doesNotExist();

    await triggerKeyEvent('input', 'keyup', KeyCodesType.DOWN_ARROW);

    assert.dom('.uni-input--error').exists({ count: 1 });
  });
});
