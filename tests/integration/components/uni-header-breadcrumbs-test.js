import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-header-breadcrumbs', 'Integration | Component | uni header breadcrumbs', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uni-header-breadcrumbs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uni-header-breadcrumbs}}
      template block text
    {{/uni-header-breadcrumbs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
