import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-header-mobile-menu-separator', 'Integration | Component | uni header mobile menu separator', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uni-header-mobile-menu-separator}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uni-header-mobile-menu-separator}}
      template block text
    {{/uni-header-mobile-menu-separator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
