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

test('it renders step markers', function(assert) {
  assert.expect(1);

  this.set('steps', 6);

  this.render(hbs`{{uni-progress-bar totalStepsCount=steps}}`);

  assert.equal(this.$().find('.uni-progress-bar__step').length - 1, this.get('steps'));
});
