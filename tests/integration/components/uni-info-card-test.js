import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-info-card', 'Integration | Component | uni info card', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-info-card}}`);

  assert.equal(this.$().text().trim(), '');
});
