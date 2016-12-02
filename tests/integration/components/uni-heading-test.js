import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-heading', 'Integration | Component | uni heading', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-heading}}`);

  assert.equal(this.$().text().trim(), '');
});
