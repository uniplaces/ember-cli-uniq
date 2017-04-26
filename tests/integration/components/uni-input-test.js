import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-input', 'Integration | Component | uni input', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-input}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders value and error without default error validation', function(assert) {
  assert.expect(2);

  this.set('value', 'name');
  this.set('showError', true);
  this.set('useDefaultErrorValidation', false);

  this.render(hbs`{{uni-input value=value showError=showError useDefaultErrorValidation=useDefaultErrorValidation}}`);

  assert.equal(this.$('input').val(), 'name');
  assert.equal(this.$('.uni-input--error').length, 1);
});

test('it renders error on invalid email', function(assert) {
  assert.expect(1);

  this.set('value', 'invalid@');
  this.set('type', 'email');

  this.render(hbs`{{uni-input value=value type=type}}`);
  assert.equal(this.$('.uni-input--error').length, 1);
});

test('it renders error with default validations on empty required field', function(assert) {
  assert.expect(1);

  this.set('value', '');
  this.set('isRequired', true);

  this.render(hbs`{{uni-input value=value isRequired=isRequired}}`);
  assert.equal(this.$('.uni-input--error').length, 1);
});

test('it renders success with default validations', function(assert) {
  assert.expect(1);

  this.set('value', '');
  this.set('useDefaultSuccessValidation', true);

  this.render(hbs`{{uni-input value=value useDefaultSuccessValidation=useDefaultSuccessValidation}}`);
  assert.equal(this.$('.uni-input--success').length, 1);
});

test('it converts numeric value', function(assert) {
  assert.expect(2);

  this.set('value', '123');
  this.set('type', 'number');

  this.render(hbs`{{uni-input value=value type=type}}`);

  assert.equal(this.$('input').val(), 123);
  assert.equal(this.get('value'), 123);
});
