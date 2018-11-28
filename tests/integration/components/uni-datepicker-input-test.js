import { module, test } from 'ember-qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from 'ember-native-dom-helpers';

module('Integration | Component | uni datepicker input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-datepicker-input}}`);

    assert.dom('.uni-datepicker-input').exists();
  });

  test('test to see if the date picker modal toggle between clicks', async function(assert) {
    assert.expect(2);

    await render(hbs`{{uni-datepicker-input}}`);

    await click('.uni-input');

    assert.dom('.uni-datepicker').exists();

    await click('.uni-input');

    assert.dom('.uni-datepicker').doesNotExist();
  });
});
