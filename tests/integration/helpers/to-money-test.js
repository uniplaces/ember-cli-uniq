
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

let StubI18nService = Service.extend({
  locale: 'en-gb'
});

moduleForComponent('to-money', 'Integration | Helper | to money', {
  integration: true,
  beforeEach() {
    this.register('service:i18n', StubI18nService);
    this.inject.service('i18n', { as: 'i18n' });
  }
});

test('It renders', function(assert) {
  this.set('money', { amount: 10000, currency_code: 'EUR' });

  this.render(hbs`{{to-money money}}`);

  assert.ok(this.$().text().trim().includes('100'));
});

test('It renders transformed', function(assert) {
  this.set('money', { amount: 10000, currency_code: 'EUR' });

  this.render(hbs`{{to-money money transform=true}}`);

  assert.ok(this.$().text().trim().includes('100'));
});

test('It renders non-transformed', function(assert) {
  this.set('money', { amount: 100, currency_code: 'EUR' });

  this.render(hbs`{{to-money money transform=false}}`);

  assert.ok(this.$().text().trim().includes('100'));
});
