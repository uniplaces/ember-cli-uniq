import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { getOwner } from '@ember/application';
import { findAll, find } from 'ember-native-dom-helpers';
import moment from 'moment';

let calendarService, calendar;

moduleForComponent('uni-datepicker-range-day', 'Integration | Component | uni datepicker range day', {
  integration: true,
  beforeEach() {
    calendarService = getOwner(this).lookup('service:power-calendar');
    calendarService.set('date', new Date(2016, 7, 18));
    calendar = {
      center: moment(calendarService.getDate()),
      locale: 'pt',
      actions: {
        moveCenter: () => {},
        select: () => {}
      }
    };

    this.set('calendar', calendar);
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{uni-datepicker-range-day calendar=calendar}}`);

  assert.ok(find('.ember-power-calendar-row'));
  assert.equal(findAll('.ember-power-calendar-day--current-month').length, 31, 'It rendered all days in center\'s month');
});
