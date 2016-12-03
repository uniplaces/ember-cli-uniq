import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_LABEL = 'Button';
const HTML_LABEL = '<i>Button</i>';

moduleForComponent('uni-header-button', 'Integration | Component | uni header button', {
  integration: true
});

test('it renders nothing', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-header-button}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders', function(assert) {
  assert.expect(1);

  this.set('label', DEFAULT_LABEL);
  this.set('action', () => {});

  this.render(hbs`{{uni-header-button label=label}}`);

  assert.equal(this.$().text().trim(), DEFAULT_LABEL);
});

test('it renders html', function(assert) {
  assert.expect(2);

  this.set('label', HTML_LABEL);
  this.set('action', () => {});

  this.render(hbs`{{uni-header-button label=label}}`);

  assert.notEqual(this.$().text().trim(), HTML_LABEL);
  assert.equal(this.$().text().trim(), DEFAULT_LABEL);
});
