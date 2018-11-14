import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

let calendarService, calendar;

module('Integration | Component | uni datepicker range day', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    calendarService = this.owner.lookup('service:power-calendar');
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
  });

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{uni-datepicker-range-day calendar=calendar}}`);

    assert.dom('.ember-power-calendar-row').exists();
    assert
      .dom('.ember-power-calendar-day--current-month')
      .exists({ count: 31 }, "It rendered all days in center's month");
  });
});
