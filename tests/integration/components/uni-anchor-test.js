import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_LABEL = 'This is a label';
const DEFAULT_REL = 'noopener noreferrer';

module('Integration | Component | uni anchor', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(3);

    this.set('label', DEFAULT_LABEL);
    this.set('rel', DEFAULT_REL);

    await render(hbs`{{uni-anchor label=label rel=rel}}`);

    assert.dom('.uni-anchor').exists();
    assert.dom('.uni-anchor').hasText(DEFAULT_LABEL);
    assert.dom('.uni-anchor').hasAttribute('rel', DEFAULT_REL);
  });
});
