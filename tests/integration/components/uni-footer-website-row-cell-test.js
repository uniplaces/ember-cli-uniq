import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni footer website row cell', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-footer-website-row-cell}}`);

    assert.dom('.uni-footer-website__row__cell').exists();
  });
});
