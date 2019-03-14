import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | interpolate', function(hooks) {
  setupRenderingTest(hooks);

  test('it interpolates values from string', async function(assert) {
    this.set('toBeInterpolated', '${b}');

    await render(hbs`{{i toBeInterpolated b='cat' d='fish'}}`);

    assert.dom(this.element).hasText('cat');

    this.set('toBeInterpolated', '${b}${d}');

    assert.dom(this.element).hasText('catfish');
  });
});
