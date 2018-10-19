import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni country', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-country}}`);

    assert.dom('.uni-country').exists();
  });

  test('it renders given country code', async function(assert) {
    assert.expect(1);

    this.set('countryCode', 'pt');

    await render(hbs`{{uni-country countryCode=countryCode}}`);

    assert.dom('input').hasValue('Portugal');
  });

  test('it renders highlighted option', async function(assert) {
    assert.expect(3);

    await render(hbs`{{uni-country}}`);

    await fillIn('input', 'p');

    assert.dom('.option--highlighted').exists();
    assert.dom('.option--highlighted').includesText('Panama');
    assert.dom('.option--highlighted').doesNotIncludeText('Portugal');
  });
});
