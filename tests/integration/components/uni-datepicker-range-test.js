import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

module('Integration | Component | uni datepicker range', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{uni-datepicker-range}}`);

    assert.dom('.calendar__nav').exists();
    assert.dom('.calendar__nav__month-name').exists();
    assert.dom('.uni-datepicker-range-day').exists();
  });

  test('it changes months and calls onSelect', async function(assert) {
    let center = moment('2020-04-01', 'YYYY-MM-DD');
    let day = center.clone().add(5, 'day');

    this.set('center', center);

    this.set('onSelect', ({ start, end }) => {
      assert.ok(start.format('ddd'), day.format('ddd'), 'calls onSelect with right date');
      assert.notOk(end, 'end is null on first click');
    });

    await render(hbs`{{uni-datepicker-range center=center onSelect=onSelect}}`);

    await click(`[data-date="${day.format('YYYY-MM-DD')}"]`);
  });

  test('it changes the center and calls onCenter', async function(assert) {
    this.set('onCenter', (date) => {
      assert.ok(date, 'calls on center with the date');
    });

    await render(hbs`{{uni-datepicker-range onCenter=onCenter}}`);

    await click('.calendar__nav__control:first-child');
  });

  test('it changes the center and calls onCenter', async function(assert) {
    this.set('onCenter', (date) => {
      assert.ok(date, 'calls on center with the date');
    });

    await render(hbs`{{uni-datepicker-range onCenter=onCenter}}`);

    await click('.calendar__nav__control:last-child');
  });
});
