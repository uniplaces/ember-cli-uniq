import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-carrousel-item', 'Integration | Component | uni carrousel item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uni-carrousel-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uni-carrousel-item}}
      template block text
    {{/uni-carrousel-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
