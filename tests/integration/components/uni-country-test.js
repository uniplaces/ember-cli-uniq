import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

moduleForComponent('uni-country', 'Integration | Component | uni country', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-country}}`);

  assert.ok(find('.uni-autocomplete'));
});

test('it renders given country code', function(assert) {
  assert.expect(1);

  this.set('countryCode', 'pt');

  this.render(hbs`{{uni-country countryCode=countryCode}}`);

  assert.equal(find('input').value, 'Portugal');
});

test('it renders highlighted option', function(assert) {
  assert.expect(3);

  this.render(hbs`{{uni-country}}`);

  // simulate input given
  this.$('input').val('p').change().focusin();

  assert.ok(find('.option--highlighted'));
  assert.equal(find('.option--highlighted').textContent.includes('Panama'), true);
  assert.equal(find('.option--highlighted').textContent.includes('Portugal'), false);
});
