import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-photo-thumbnail', 'Integration | Component | uni photo thumbnail', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uni-photo-thumbnail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uni-photo-thumbnail}}
      template block text
    {{/uni-photo-thumbnail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
