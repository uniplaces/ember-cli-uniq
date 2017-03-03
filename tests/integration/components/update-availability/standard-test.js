import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('update-availability/standard', 'Integration | Component | update availability/standard', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{update-availability/standard}}`);

  assert.equal(this.$().text().trim(), '');
});
