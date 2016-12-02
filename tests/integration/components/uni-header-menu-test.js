import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-header-menu', 'Integration | Component | uni header menu', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-header-menu}}`);

  assert.equal(this.$().text().trim(), '');
});
