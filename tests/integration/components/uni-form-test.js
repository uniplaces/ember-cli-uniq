import RSVP from 'rsvp';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, click } from 'ember-native-dom-helpers';

moduleForComponent('uni-form', 'Integration | Component | uni form', {
  integration: true
});

test('it renders the yielded content', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#uni-form}}
      This is a form content
    {{/uni-form}}
  `);

  assert.ok(find('.uni-form'));
  assert.equal(find('.uni-form').textContent.trim(), 'This is a form content');
});

test('it renders the button label', function(assert) {
  assert.expect(2);

  this.set('label', 'This is a button label');

  this.render(hbs`
    {{#uni-form label=label}}
      This is a form content
    {{/uni-form}}
  `);

  assert.ok(find('.uni-button--primary'));
  assert.equal(find('.uni-button--primary').textContent.trim(), 'This is a button label');
});

test('it calls onSubmit and stops the loading after promise', async function(assert) {
  assert.expect(2);

  this.set('isLoading', null);
  this.set('submit', () => new RSVP.Promise((resolve) => {
    assert.equal(this.get('isLoading'), true, 'it started the loading');

    resolve();
  }));

  this.render(hbs`{{uni-form isLoading=isLoading onSubmit=submit}}`);

  click('.uni-button');

  assert.equal(this.get('isLoading'), false, 'it ends the loading');
});

test('it calls onSubmit and works without it returning a promise', async function(assert) {
  assert.expect(2);

  this.set('isLoading', null);
  this.set('submit', () => assert.equal(this.get('isLoading'), true, 'it started the loading'));

  this.render(hbs`{{uni-form isLoading=isLoading onSubmit=submit}}`);

  click('.uni-button');

  assert.equal(this.get('isLoading'), false, 'it ends the loading');
});
