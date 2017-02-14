import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-footer-website-row', 'Integration | Component | uni footer website row', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-footer-website-row}}`);

  assert.equal(this.$().text().trim(), '');
});
