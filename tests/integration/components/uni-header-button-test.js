import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_LABEL = 'Button';

module('Integration | Component | uni header button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders nothing', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-header-button}}`);

    assert.dom('.uni-header__nav__button').exists();
  });

  test('it renders', async function(assert) {
    assert.expect(1);

    this.set('label', DEFAULT_LABEL);
    this.set('action', () => {});

    await render(hbs`{{uni-header-button label=label}}`);

    assert.dom('.uni-header__nav__button').hasText(DEFAULT_LABEL);
  });
});
