import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni header mobile menu', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{uni-header-mobile-menu}}`);

    assert.dom('.uni-header-mobile-menu').exists();
  });

  test('it renders content', async function(assert) {
    await render(hbs`
      {{#uni-header-mobile-menu}}
        template block text
      {{/uni-header-mobile-menu}}
    `);

    assert.dom('.uni-header-mobile-menu').hasText('template block text');
  });
});
