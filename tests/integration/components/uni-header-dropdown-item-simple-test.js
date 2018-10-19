import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni header dropdown item simple', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    this.set('option', { key: 'pt', value: 'Portugal' });
    this.set('onClick', (key) => {
      return key;
    });

    await render(hbs`{{uni-header-dropdown-item-simple option=option onClick=onClick}}`);

    assert.dom('.uni-header-dropdown-item-simple').exists();
  });
});
