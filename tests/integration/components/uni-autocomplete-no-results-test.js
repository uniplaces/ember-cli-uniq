import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-autocomplete-no-results', 'Integration | Component | uni autocomplete no results', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uni-autocomplete-no-results}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uni-autocomplete-no-results}}
      template block text
    {{/uni-autocomplete-no-results}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
