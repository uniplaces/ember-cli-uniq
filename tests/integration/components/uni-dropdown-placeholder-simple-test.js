import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-dropdown-placeholder-simple', 'Integration | Component | uni dropdown placeholder simple', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-dropdown-placeholder-simple}}`);

  assert.equal(this.$().text().trim(), '');
});
