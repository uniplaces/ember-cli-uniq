import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni calendar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders both inputs', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-calendar}}`);

    assert.dom('.uni-datepicker-input__wrapper').exists({ count: 2 });
  });
});
