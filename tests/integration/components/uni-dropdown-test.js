import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-dropdown', 'Integration | Component | uni dropdown', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-dropdown}}`);

  assert.equal(this.$().text().trim(), '');
});
