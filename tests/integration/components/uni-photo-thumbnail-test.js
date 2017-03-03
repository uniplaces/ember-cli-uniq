import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-photo-thumbnail', 'Integration | Component | uni photo thumbnail', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{uni-photo-thumbnail}}`);

  assert.equal(this.$().text().trim(), '');
});
