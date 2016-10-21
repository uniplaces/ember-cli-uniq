import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-dropdown-placeholder-simple', 'Integration | Component | uni dropdown placeholder simple', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{uni-dropdown-placeholder-simple}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#uni-dropdown-placeholder-simple}}
      template block text
    {{/uni-dropdown-placeholder-simple}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
