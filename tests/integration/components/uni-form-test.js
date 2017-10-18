import RSVP from 'rsvp';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-form', 'Integration | Component | uni form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-form}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it calls onSubmit and stops the loading after promise', function(assert) {
  assert.expect(2);

  this.set('isLoading', null);
  this.set('submit', () => {
    return new RSVP.Promise((resolve) => {
      assert.equal(this.get('isLoading'), true, 'it starts the loading');
      resolve();
    });
  });

  this.render(hbs`{{uni-form isLoading=isLoading onSubmit=submit}}`);

  this.$().find('.uni-button').click();

  assert.equal(this.get('isLoading'), false, 'it ends the loading');
});

test('it calls onSubmit and works without it returning a promise', function(assert) {
  assert.expect(2);

  this.set('isLoading', null);
  this.set('submit', () => {
    assert.equal(this.get('isLoading'), true, 'it starts the loading');
  });

  this.render(hbs`{{uni-form isLoading=isLoading onSubmit=submit}}`);

  this.$().find('.uni-button').click();

  assert.equal(this.get('isLoading'), false, 'it ends the loading');
});
