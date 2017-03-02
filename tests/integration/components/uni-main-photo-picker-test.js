import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-main-photo-picker', 'Integration | Component | uni main photo picker', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{uni-main-photo-picker}}`);

  assert.equal(this.$().text().trim(), '');
});
