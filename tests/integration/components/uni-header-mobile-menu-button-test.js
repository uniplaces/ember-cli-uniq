import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-header-mobile-menu-button', 'Integration | Component | uni header mobile menu button', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{uni-header-mobile-menu-button}}`);

  assert.equal(this.$().text().trim(), '');
});
