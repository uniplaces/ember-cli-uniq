import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-header-dropdown-item-simple', 'Integration | Component | uni header dropdown item simple', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uni-header-dropdown-item-simple}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uni-header-dropdown-item-simple}}
      template block text
    {{/uni-header-dropdown-item-simple}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
