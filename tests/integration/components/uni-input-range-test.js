import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

moduleForComponent('uni-input-range', 'Integration | Component | uni input range', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{uni-input-range}}`);

  assert.notEqual(find('.uni-input-range').textContent.trim(), '');
  assert.equal(find('.uni-input-range').textContent.trim(), '-\n+');
});

test('it renders text', function(assert) {
  assert.expect(1);

  this.set('value', 10);
  this.set('target', 'beds');

  this.render(hbs`{{uni-input-range value=value target=target}}`);

  assert.notEqual(find('.uni-input-range').textContent.trim(), '');
});

test('it renders with small modifier', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-input-range isSmall=true}}`);

  assert.ok(find('.uni-input-range').className.includes('--small'));
});
