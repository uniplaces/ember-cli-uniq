import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni checkbox', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-checkbox}}`);

    assert.dom('.uni-checkbox').exists();
  });

  test('it and puts small class', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-checkbox isSmall=true}}`);

    assert.dom('.uni-checkbox').hasClass('uni-checkbox--small');
  });

  test('it renders icon', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-checkbox icon="cross"}}`);

    assert.dom('.icon').exists();
  });
});
