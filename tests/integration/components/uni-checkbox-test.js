import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-checkbox', 'Integration | Component | uni checkbox', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-checkbox}}`);

  assert.equal(this.$().text().trim(), '');
});
