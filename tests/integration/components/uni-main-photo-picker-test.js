import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-main-photo-picker', 'Integration | Component | uni main photo picker', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uni-main-photo-picker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uni-main-photo-picker}}
      template block text
    {{/uni-main-photo-picker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
