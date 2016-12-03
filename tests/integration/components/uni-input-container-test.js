import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-input-container', 'Integration | Component | uni input container', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-input-container}}`);

  assert.equal(this.$().text().trim(), '');
});
