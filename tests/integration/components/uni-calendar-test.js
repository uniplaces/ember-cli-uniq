import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

module('Integration | Component | uni calendar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders both inputs', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-calendar}}`);

    assert.dom('.uni-datepicker-input__wrapper').exists({ count: 2 });
  });

  test('it renders datepicker after click and closes after clicking on calendar', async function(assert) {
    assert.expect(2);

    await render(hbs`{{uni-calendar showDatepicker=true}}`);

    await click('.uni-input');

    assert.dom('.uni-datepicker').exists();

    await click('.ember-power-calendar-day');

    assert.dom('.uni-datepicker').doesNotExist();
  });

  test('it renders the exact date choosen plus the minimum days', async function(assert) {
    assert.expect(2);

    this.set('startDate', moment('2020-04-01'));

    await render(hbs`{{uni-calendar showDatepicker=true minimumDays=5 startDate=startDate}}`);

    await click('.uni-input');
    await click('.ember-power-calendar-day--selected');

    assert.dom('.uni-datepicker-input:first-child input').hasValue('Apr 1, 2020');
    assert.dom('.uni-datepicker-input:last-child input').hasValue('Apr 6, 2020');
  });
});
