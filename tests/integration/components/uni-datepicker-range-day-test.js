import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';
import { getOwner } from '@ember/application';

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
  assert.expect(2);

  this.render(hbs`{{uni-datepicker-range-day calendar=calendar}}`);

  assert.dom('.ember-power-calendar-row').exists();
  assert
    .dom('.ember-power-calendar-day--current-month')
    .exists({ count: 31 }, 'It rendered all days in center\'s month');
});
