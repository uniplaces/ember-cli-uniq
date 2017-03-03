import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('update-availability/fixed', 'Integration | Component | update availability/fixed', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{update-availability/fixed}}`);

  assert.equal(this.$().text().trim(), '');
});
