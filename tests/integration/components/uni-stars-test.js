import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-stars', 'Integration | Component | uni stars', {
  integration: true
});

test('it renders maxStars', function(assert) {
  this.set('maxStars', 5);
  this.render(hbs`{{uni-stars maxStars=maxStars}}`);

  assert.equal(this.$('svg').length, 5);
});
