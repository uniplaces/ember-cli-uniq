import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni button dropdown', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    this.set('selected', 'SELECTED');

    await render(hbs`{{uni-header-dropdown selected=selected}}`);

    assert.dom('.uni-header-dropdown').hasText('SELECTED');
  });
});
