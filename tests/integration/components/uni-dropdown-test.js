import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-dropdown', 'Integration | Component | uni dropdown', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-dropdown}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders an alias for selected', function(assert) {
  assert.expect(1);

  this.set('options', [
    { key: 'facebook', value: 'Facebook' },
    { key: 'google', value: 'Google' }
  ]);
  this.set('selected', 'facebook');
  this.set('selectedAlias', 'example');

  this.render(hbs`{{uni-dropdown options=options selected=selected selectedAlias=selectedAlias}}`);

  assert.equal(this.$('.uni-dropdown__button').text().trim(), 'example');
});

test('it renders given svg', function(assert) {
  assert.expect(2);

  this.set('options', [
    { key: 'facebook', value: 'Facebook' },
    { key: 'google', value: 'Google' }
  ]);
  this.set('selected', 'google');
  this.set('selectedSvgs', ['icons/google']);

  this.render(hbs`{{uni-dropdown options=options selected=selected selectedSvgs=selectedSvgs}}`);

  assert.equal(this.$('.uni-dropdown__button').text().trim(), 'google');
  assert.equal(this.$('.uni-dropdown__button .uni-dropdown__svg-group svg').length, 1);
});
