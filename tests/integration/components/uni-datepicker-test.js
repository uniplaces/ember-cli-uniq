import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-datepicker', 'Integration | Component | uni datepicker', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-datepicker}}`);

  assert.notEqual(this.$().text().trim(), '');
});
