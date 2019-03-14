
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

let StubI18nService = Service.extend({
  locale: 'pt-pt'
});
let StubIntlService = Service.extend({
  primaryLocale: 'en-gb'
})

module('Integration | Helper | to money', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders without any service defined', async function(assert) {
    this.set('money', { amount: 10000, currency_code: 'BRL' });

    await render(hbs`{{to-money money}}`);

    assert.dom(this.element).hasText('R$100');
  });

  test('it renders with only i18n service defined', async function(assert) {
    this.owner.register('service:i18n', StubI18nService);

    this.set('money', { amount: 10000, currency_code: 'EUR' });

    await render(hbs`{{to-money money}}`);

    assert.dom(this.element).hasText('100€');
  });

  test('it renders with only intl service defined', async function(assert) {
    this.owner.register('service:intl', StubIntlService);

    this.set('money', { amount: 250000, currency_code: 'GBP' });

    await render(hbs`{{to-money money}}`);

    assert.dom(this.element).hasText('£2500');
  });

  test('it superseds intl service defined', async function(assert) {
    this.owner.register('service:intl', StubIntlService);
    this.owner.register('service:i18n', StubI18nService);

    this.set('money', { amount: 250000, currency_code: 'GBP' });

    await render(hbs`{{to-money money}}`);

    assert.dom(this.element).hasText('£2500');
  });

  test('it renders transformed', async function(assert) {
    this.set('money', { amount: 10000, currency_code: 'USD' });

    await render(hbs`{{to-money money transform=true}}`);

    assert.dom(this.element).hasText('US$100');
  });

  test('it renders non-transformed', async function(assert) {
    this.set('money', { amount: 2450, currency_code: 'USD' });

    await render(hbs`{{to-money money transform=false}}`);

    assert.dom(this.element).hasText('US$2450');
  });
});
