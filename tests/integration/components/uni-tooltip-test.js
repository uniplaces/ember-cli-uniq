import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setBreakpoint } from 'ember-responsive/test-support';

module('Integration | Component | uni tooltip', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    setBreakpoint('mobile');
    await render(hbs`{{uni-tooltip media=media}}`);

    assert.dom('.uni-tooltip__text').doesNotExist();

    await click('.uni-tooltip__icon');

    assert.dom('.uni-tooltip__text').exists();
  });
});
