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
