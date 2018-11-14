import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni autocomplete no results', function(
  hooks
) {
  setupRenderingTest(hooks);

  test('it renders nothing', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-autocomplete-no-results}}`);

    assert.dom('.uni-autocomplete-no-results').exists();
  });

  test('it renders', async function(assert) {
    assert.expect(1);

    this.set('value', 'Lisbon');

    await render(hbs`{{uni-autocomplete-no-results value=value}}`);

    assert
      .dom('.uni-autocomplete-no-results')
      .hasText('No results for Lisbon.');
  });
});
