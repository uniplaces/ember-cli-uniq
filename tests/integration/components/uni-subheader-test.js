import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_TITLE = 'Default title';
const DEFAULT_SUBTITLE = 'Default subtitle';

module('Integration | Component | uni subheader', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders nothing', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-subheader}}`);

    assert.dom('.uni-subheader').exists();
  });

  test('it renders title', async function(assert) {
    assert.expect(1);

    this.set('title', DEFAULT_TITLE);

    await render(hbs`{{uni-subheader title=title}}`);

    assert.dom('.uni-subheader').hasText(DEFAULT_TITLE);
  });

  test('it renders subtitle', async function(assert) {
    assert.expect(1);

    this.set('title', DEFAULT_TITLE);
    this.set('subtitle', DEFAULT_SUBTITLE);

    await render(hbs`{{uni-subheader title=title subtitle=subtitle}}`);

    assert.dom('.uni-subheader__caption').hasText(DEFAULT_SUBTITLE);
  });
});
