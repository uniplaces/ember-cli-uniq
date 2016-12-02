import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-alert', 'Integration | Component | uni alert', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-alert}}`);

  assert.notEqual(this.$().text().trim(), '');
});
