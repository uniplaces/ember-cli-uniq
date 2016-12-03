import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-autocomplete-no-results', 'Integration | Component | uni autocomplete no results', {
  integration: true
});

test('it renders nothing', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-autocomplete-no-results}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders', function(assert) {
  assert.expect(2);

  this.set('value', 'Lisbon');

  this.render(hbs`{{uni-autocomplete-no-results value=value}}`);

  assert.notEqual(this.$(), '');
  assert.equal(this.$().text().trim(), 'No results for Lisbon.');
});
