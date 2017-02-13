import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-tooltip', 'Integration | Component | uni tooltip', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{uni-tooltip}}`);

  assert.equal(this.$().text().trim(), '');
});
