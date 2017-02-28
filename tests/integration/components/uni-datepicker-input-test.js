import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-datepicker-input', 'Integration | Component | uni datepicker input', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-datepicker-input}}`);

  assert.equal(this.$().text().trim(), '');
});
