import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni datepicker', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{uni-datepicker}}`);

    assert.dom('.uni-datepicker').exists();
    assert.dom('.uni-datepicker').hasAnyText();
  });
});
