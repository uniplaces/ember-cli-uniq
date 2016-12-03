import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-header-dropdown', 'Integration | Component | uni header dropdown', {
  integration: true
});

test('it renders nothing', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-header-dropdown}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders', function(assert) {
  assert.expect(1);

  this.set('selected', 'SELECTED');

  this.render(hbs`{{uni-header-dropdown selected=selected}}`);

  assert.equal(this.$().text().trim(), 'SELECTED');
});
