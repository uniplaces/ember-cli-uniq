import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { click, find } from 'ember-native-dom-helpers';
import moment from 'moment';

moduleForComponent('uni-datepicker-range', 'Integration | Component | uni datepicker range', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{uni-datepicker-range}}`);

  assert.ok(find('.calendar__nav'), 'has the calendar');
  assert.ok(find('.calendar__nav__month-name'), 'has the month name');
  assert.ok(find('.uni-datepicker-range-day'), 'renders day components');
});

test('it changes months and calls onSelect', async function(assert) {
  let day = moment().add(5, 'day');

  this.set('onSelect', ({ start, end }) => {
    assert.ok(start.format('ddd'), day.format('ddd'), 'calls onSelect with right date');
    assert.notOk(end, 'end is null on first click');
  });

  this.render(hbs`{{uni-datepicker-range onSelect=onSelect}}`);

  await click(`[data-date="${day.format('YYYY-MM-DD')}"]`);
});

test('it changes the center and calls onCenter', async function(assert) {
  this.set('onCenter', (date) => {
    assert.ok(date, 'calls on center with the date');
  });

  this.render(hbs`{{uni-datepicker-range onCenter=onCenter}}`);

  await click('.calendar__nav__control:first-child');
});

test('it changes the center and calls onCenter', async function(assert) {
  this.set('onCenter', (date) => {
    assert.ok(date, 'calls on center with the date');
  });

  this.render(hbs`{{uni-datepicker-range onCenter=onCenter}}`);

  await click('.calendar__nav__control:last-child');
});
