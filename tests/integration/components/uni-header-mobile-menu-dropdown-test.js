import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-header-mobile-menu-dropdown', 'Integration | Component | uni header mobile menu dropdown', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{uni-header-mobile-menu-dropdown}}`);

  assert.equal(this.$().text().trim(), '');
});
