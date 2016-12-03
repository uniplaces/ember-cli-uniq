import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-divider', 'Integration | Component | uni divider', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-divider}}`);

  assert.equal(this.$().text().trim(), '');
});
