import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_TITLE = 'Sign In';

module('Integration | Component | uni signin', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders nothing', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-signin}}`);

    assert.dom('.uni-signin').exists();
  });

  test('it renders title', async function(assert) {
    assert.expect(1);

    this.set('title', DEFAULT_TITLE);

    await render(hbs`{{uni-signin title=title}}`);

    assert.dom('.uni-signin').hasText(DEFAULT_TITLE);
  });
});
