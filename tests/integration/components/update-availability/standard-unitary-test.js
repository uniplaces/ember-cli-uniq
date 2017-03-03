import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('update-availability/standard-unitary', 'Integration | Component | update availability/standard unitary', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{update-availability/standard-unitary}}`);

  assert.equal(this.$().text().trim(), '');
});
