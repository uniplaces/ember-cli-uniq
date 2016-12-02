import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-progress-bar', 'Integration | Component | uni progress bar', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-progress-bar}}`);

  assert.equal(this.$().text().trim(), '');
});
