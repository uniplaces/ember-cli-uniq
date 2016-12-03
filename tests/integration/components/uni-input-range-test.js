import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-input-range', 'Integration | Component | uni input range', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{uni-input-range}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$().text().trim(), '-\n+');
});

test('it renders text', function(assert) {
  assert.expect(1);

  this.set('value', 10);
  this.set('target', 'beds');

  this.render(hbs`{{uni-input-range value=value target=target}}`);

  assert.notEqual(this.$().text().trim(), '');
});
