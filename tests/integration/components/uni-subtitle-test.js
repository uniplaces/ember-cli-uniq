import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_SUBTITLE = 'Default subtitle';

module('Integration | Component | uni subtitle', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    this.set('subtitle', DEFAULT_SUBTITLE);

    await render(hbs`{{uni-subtitle subtitle=subtitle}}`);

    assert.dom('.uni-subtitle').exists();
    assert.dom('.uni-subtitle').hasText(DEFAULT_SUBTITLE);
  });
});
