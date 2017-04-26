import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_LABEL = 'Option';
const DEFAULT_VALUE = 'option';

moduleForComponent('uni-selector-button', 'Integration | Component | uni selector button', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-selector-button}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders checked', function(assert) {
  assert.expect(3);

  this.set('label', DEFAULT_LABEL);
  this.set('checked', true);

  this.render(hbs`{{uni-selector-button label=label checked=checked}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('label').text().trim(), DEFAULT_LABEL);
  assert.equal(this.$('svg').length, 1);
});

test('it renders unchecked', function(assert) {
  assert.expect(3);

  this.set('label', DEFAULT_LABEL);
  this.set('checked', false);

  this.render(hbs`{{uni-selector-button label=label checked=checked}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('label').text().trim(), DEFAULT_LABEL);
  assert.equal(this.$('svg').length, 0);
});

test('it renders error', function(assert) {
  assert.expect(3);

  this.set('label', DEFAULT_LABEL);
  this.set('error', true);
  this.set('groupValue', DEFAULT_VALUE);
  this.set('value', DEFAULT_VALUE);

  this.render(hbs`{{uni-selector-button label=label error=error value=value groupValue=groupValue}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('label').text().trim(), DEFAULT_LABEL);
  assert.equal(this.$('.uni-multi-selector__button--error').length, 1);
});
