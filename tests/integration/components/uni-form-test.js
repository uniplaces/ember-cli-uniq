import RSVP from 'rsvp';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, click } from 'ember-native-dom-helpers';

moduleForComponent('uni-form', 'Integration | Component | uni form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(4);

  this.set('label', 'This is a button label');

  this.render(hbs`
    {{#uni-form label=label}}
      This is a form content
    {{/uni-form}}
  `);

  assert.dom('.uni-form').exists();
  assert.dom('.uni-form').containsText('This is a form content');
  assert.dom('.uni-button--primary').exists();
  assert.dom('.uni-button--primary').hasText('This is a button label');
});

test('it sets the autocomplete as "on" by default', function(assert) {
  assert.expect(2);

  this.set('label', 'This is a button label');

  this.render(hbs`
    {{#uni-form label=label}}
      This is a form content
    {{/uni-form}}
  `);

  assert.dom('form').exists();
  assert.dom('form').hasAttribute('autocomplete', 'on');
});

test('it sets the autocomplete to custom value', function(assert) {
  assert.expect(2);

  this.set('label', 'This is a button label');
  this.set('autocomplete', 'off');

  this.render(hbs`
    {{#uni-form label=label autocomplete=autocomplete}}
      This is a form content
    {{/uni-form}}
  `);

  assert.dom('form').exists();
  assert.dom('form').hasAttribute('autocomplete', 'off');
});

test('it calls onSubmit and stops the loading after promise', async function(assert) {
  assert.expect(2);

  this.set('isLoading', null);
  this.set('submit', () => new RSVP.Promise((resolve) => {
    assert.equal(this.get('isLoading'), true, 'it started the loading');

    resolve();
  }));

  this.render(hbs`{{uni-form isLoading=isLoading onSubmit=submit}}`);

  await click('.uni-button');

  assert.equal(this.get('isLoading'), false, 'it ends the loading');
});

test('it calls onSubmit and works without it returning a promise', async function(assert) {
  assert.expect(2);

  this.set('isLoading', null);
  this.set('submit', () => assert.equal(this.get('isLoading'), true, 'it started the loading'));

  this.render(hbs`{{uni-form isLoading=isLoading onSubmit=submit}}`);

  await click('.uni-button');

  assert.equal(this.get('isLoading'), false, 'it ends the loading');
});
