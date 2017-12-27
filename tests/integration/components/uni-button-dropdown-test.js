import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-button-dropdown', 'Integration | Component | uni button dropdown', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.set('selected', 'SELECTED');

  this.render(hbs`{{uni-header-dropdown selected=selected}}`);

  assert.equal(this.$().text().trim(), 'SELECTED');
});
