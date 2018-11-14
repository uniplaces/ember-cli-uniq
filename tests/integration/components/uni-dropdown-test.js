import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni dropdown', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-dropdown}}`);

    assert.dom('.uni-dropdown').exists();
  });

  test('it renders an alias for selected', async function(assert) {
    assert.expect(1);

    this.set('options', [
      { key: 'facebook', value: 'Facebook' },
      { key: 'google', value: 'Google' }
    ]);
    this.set('selected', 'facebook');
    this.set('selectedAlias', 'example');

    await render(
      hbs`{{uni-dropdown options=options selected=selected selectedAlias=selectedAlias}}`
    );

    assert.dom('.uni-dropdown__button').hasText('example');
  });

  test('it renders given svg', async function(assert) {
    assert.expect(2);

    this.set('options', [
      { key: 'facebook', value: 'Facebook' },
      { key: 'google', value: 'Google' }
    ]);
    this.set('selected', 'google');
    this.set('selectedSvgs', ['google']);

    await render(
      hbs`{{uni-dropdown options=options selected=selected selectedSvgs=selectedSvgs}}`
    );

    assert.dom('.uni-dropdown__button').hasText('google');
    assert.dom('.uni-dropdown__button .uni-dropdown__svg-group svg').exists();
  });
});
