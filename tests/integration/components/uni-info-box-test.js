import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-info-box', 'Integration | Component | uni info box', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-info-box}}`);

  assert.notEqual(this.$().text().trim(), '');
});
