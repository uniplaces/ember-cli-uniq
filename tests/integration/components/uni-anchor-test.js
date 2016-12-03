import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_LABEL = 'This is a label';

moduleForComponent('uni-anchor', 'Integration | Component | uni anchor', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(3);

  this.set('label', DEFAULT_LABEL);

  this.render(hbs`{{uni-anchor label=label}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$().text().trim(), DEFAULT_LABEL);
  assert.equal(this.$('.uni-anchor').text().trim(), DEFAULT_LABEL);

});
