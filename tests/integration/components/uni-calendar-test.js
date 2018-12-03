import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

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
});
