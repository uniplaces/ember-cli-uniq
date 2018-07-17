import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { fillIn, keyEvent } from 'ember-native-dom-helpers';
import KeyCodesType from 'ember-cli-uniq/enums/key-codes-type';

moduleForComponent('uni-input', 'Integration | Component | uni input', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-input}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders error with given error validation', function(assert) {
  assert.expect(1);

  this.set('showError', computed('value', function() {
    return isEmpty(this.get('value'));
  }));

  this.render(hbs`{{uni-input showError=showError}}`);

  assert.dom('.uni-input--error').exists();
});

test('it renders success with given success validation', function(assert) {
  assert.expect(1);

  this.set('showSuccess', true);

  this.render(hbs`{{uni-input showSuccess=showSuccess}}`);

  assert.dom('.uni-input--success').exists();
});

test('it renders error on invalid email', function(assert) {
  assert.expect(1);

  this.set('value', 'invalid@');
  this.set('type', 'email');

  this.render(hbs`{{uni-input value=value type=type}}`);

  assert.dom('.uni-input--error').exists();
});

test('it renders error with default validations on empty required field', function(assert) {
  assert.expect(1);

  this.set('value', '');
  this.set('isRequired', true);

  this.render(hbs`{{uni-input value=value isRequired=isRequired}}`);

  assert.dom('.uni-input--error').exists();
});

test('it renders success with default validations', function(assert) {
  assert.expect(1);

  this.set('showSuccessDefault', true);

  this.render(hbs`{{uni-input showSuccessDefault=showSuccessDefault}}`);

  assert.dom('.uni-input--success').exists();
});

test('it doesnt render success with default validations and empty required field', function(assert) {
  assert.expect(1);

  this.set('isRequired', true);
  this.set('showSuccessDefault', true);

  this.render(hbs`{{uni-input isRequired=isRequired showSuccessDefault=showSuccessDefault}}`);

  assert.dom('.uni-input--success').doesNotExist();
});

test('it converts numeric value', function(assert) {
  assert.expect(2);

  this.set('value', '123');
  this.set('type', 'number');

  this.render(hbs`{{uni-input value=value type=type}}`);

  assert.dom('input').hasValue('123');
  assert.equal(this.get('value'), 123);
});

test('it returns null instead of NaN when the input is empty', function(assert) {
  assert.expect(2);

  this.set('value', null);
  this.set('type', 'number');

  this.render(hbs`{{uni-input value=value type=type}}`);

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

  this.render(hbs`{{uni-input value=value showError=showError onKeyUp=onKeyUp}}`);

  assert.dom('input').exists();
  assert.dom('.uni-input--error').doesNotExist();

  await fillIn('input', 'random text');
  await keyEvent('input', 'keyup', KeyCodesType.DOWN_ARROW);
});

test('it calls onKeyDown callback with value and isValid', async function(assert) {
  assert.expect(4);

  this.set('value', null);
  this.set('showError', false);
  this.set('onKeyDown', (value, isValid) => {
    assert.equal(value, 'random text');
    assert.ok(isValid);
  });

  this.render(hbs`{{uni-input value=value showError=showError onKeyDown=onKeyDown}}`);

  assert.dom('input').exists();
  assert.dom('.uni-input--error').doesNotExist();

  await fillIn('input', 'random text');
  await keyEvent('input', 'keydown', KeyCodesType.DOWN_ARROW);
});

test('it triggers the email validation after the user inputs an invalid value', function(assert) {
  assert.expect(3);

  this.set('value', null);
  this.set('type', 'email');
  this.set('showError', false);
  this.set('onKeyUp', (value, isValid) => {
    assert.notOk(isValid);
    this.set('showError', isValid);
  })

  this.render(hbs`{{uni-input value=value type=type showError=showError onKeyUp=onKeyUp}}`);

  assert.dom('.uni-input--error').doesNotExist();

  await fillIn('input', 'this-is-an-invalid-email@');
  await keyEvent('input', 'keyup', KeyCodesType.DOWN_ARROW);

  assert.dom('.uni-input--error').exists({ count: 1 });
});
