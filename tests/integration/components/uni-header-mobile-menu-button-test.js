import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni header mobile menu button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{uni-header-mobile-menu-button}}`);

    assert.dom('.uni-header__mobile-nav__button').exists();
  });
});
