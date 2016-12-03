import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-step-card', 'Integration | Component | uni step card', {
  integration: true
});

test('it renders nothing', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-step-card}}`);

  assert.equal(this.$().text().trim(), '');
});
