import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-carrousel', 'Integration | Component | uni carrousel', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-carrousel}}`);

  assert.equal(this.$().text().trim(), '');
});
