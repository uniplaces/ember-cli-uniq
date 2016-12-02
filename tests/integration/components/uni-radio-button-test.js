import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_LABEL = 'Radio option';

moduleForComponent('uni-radio-button', 'Integration | Component | uni radio button', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-radio-button}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders checked', function(assert) {
  assert.expect(2);

  this.set('label', DEFAULT_LABEL);
  this.set('checked', true);

  this.render(hbs`{{uni-radio-button label=label checked=checked}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('label').text().trim(), DEFAULT_LABEL);
});

test('it renders unchecked', function(assert) {
  assert.expect(2);

  this.set('label', DEFAULT_LABEL);
  this.set('checked', false);

  this.render(hbs`{{uni-radio-button label=label checked=checked}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('label').text().trim(), DEFAULT_LABEL);
});
