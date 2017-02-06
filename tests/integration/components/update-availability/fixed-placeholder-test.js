import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('update-availability/fixed-placeholder', 'Integration | Component | update availability/fixed placeholder', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{update-availability/fixed-placeholder}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#update-availability/fixed-placeholder}}
      template block text
    {{/update-availability/fixed-placeholder}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
