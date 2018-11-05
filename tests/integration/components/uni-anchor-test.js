import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_LABEL = 'This is a label';

module('Integration | Component | uni anchor', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    this.set('label', DEFAULT_LABEL);

    await render(hbs`{{uni-anchor label=label}}`);

    assert.dom('.uni-anchor').exists();
    assert.dom('.uni-anchor').hasText(DEFAULT_LABEL);
  });
});
