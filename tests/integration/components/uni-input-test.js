import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const { computed, isEmpty } = Ember;

moduleForComponent('uni-input', 'Integration | Component | uni input', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-input}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders error without default error validation', function(assert) {
  assert.expect(1);

  this.set('showError', computed('value', function() {
    return isEmpty(this.get('value'));
  }));
  this.set('useDefaultErrorValidation', false);

  this.render(hbs`{{uni-input showError=showError useDefaultErrorValidation=useDefaultErrorValidation}}`);

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

  this.set('useDefaultSuccessValidation', true);

  this.render(hbs`{{uni-input useDefaultSuccessValidation=useDefaultSuccessValidation}}`);
  assert.equal(this.$('.uni-input--success').length, 1);
});

test('it doesnt render success with default validations and empty required field', function(assert) {
  assert.expect(1);

  this.set('isRequired', true);
  this.set('useDefaultSuccessValidation', true);

  this.render(hbs`{{uni-input isRequired=isRequired useDefaultSuccessValidation=useDefaultSuccessValidation}}`);
  assert.equal(this.$('.uni-input--success').length, 0);
});

test('it converts numeric value', function(assert) {
  assert.expect(2);

  this.set('value', '123');
  this.set('type', 'number');

  this.render(hbs`{{uni-input value=value type=type}}`);

  assert.equal(this.$('input').val(), 123);
  assert.equal(this.get('value'), 123);
});
