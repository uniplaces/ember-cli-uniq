import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-autocomplete', 'Integration | Component | uni autocomplete', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-autocomplete}}`);

  assert.equal(this.$().text().trim(), '');
});
