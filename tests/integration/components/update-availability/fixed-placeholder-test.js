import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('update-availability/fixed-placeholder', 'Integration | Component | update availability/fixed placeholder', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{update-availability/fixed-placeholder}}`);

  assert.equal(this.$().text().trim(), '');
});
