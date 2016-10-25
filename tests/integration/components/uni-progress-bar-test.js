import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-progress-bar', 'Integration | Component | uni progress bar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{uni-progress-bar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#uni-progress-bar}}
      template block text
    {{/uni-progress-bar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
