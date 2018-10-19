import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni header dropdown', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders nothing', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-header-dropdown}}`);

    assert.dom('.uni-header-dropdown').exists();
  });

  test('it renders', async function(assert) {
    assert.expect(1);

    this.set('selected', 'SELECTED');

    await render(hbs`{{uni-header-dropdown selected=selected}}`);

    assert.dom('.uni-header-dropdown').hasText('SELECTED');
  });
});
