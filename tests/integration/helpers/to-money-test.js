
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

let StubIntlService = Service.extend({
  primaryLocale: 'en-gb'
});

module('Integration | Helper | to money', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:intl', StubIntlService);
    this.intl = this.owner.lookup('service:intl');
  });

  test('It renders', async function(assert) {
    this.set('money', { amount: 10000, currency_code: 'EUR' });

    await render(hbs`{{to-money money}}`);

    assert.dom(this.element).includesText('100');
  });

  test('It renders transformed', async function(assert) {
    this.set('money', { amount: 10000, currency_code: 'EUR' });

    await render(hbs`{{to-money money transform=true}}`);

    assert.dom(this.element).includesText('100');
  });

  test('It renders non-transformed', async function(assert) {
    this.set('money', { amount: 100, currency_code: 'EUR' });

    await render(hbs`{{to-money money transform=false}}`);

    assert.dom(this.element).includesText('100');
  });
});
