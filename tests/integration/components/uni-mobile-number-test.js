import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-mobile-number', 'Integration | Component | uni mobile number', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-mobile-number}}`);

  assert.notEqual(this.$().text().trim(), '');
});

test('it blocks invalid symbols', function(assert) {
  assert.expect(3);

  this.render(hbs`{{uni-mobile-number}}`);

  this.$('input').val('+');
  this.$('input').trigger('keyup');

  assert.equal(this.$('input').val(), '');

  this.$('input').val('e');
  this.$('input').trigger('keyup');

  assert.equal(this.$('input').val(), '');

  this.$('input').val('123');
  this.$('input').trigger('keyup');

  assert.equal(this.$('input').val(), '123');
});
