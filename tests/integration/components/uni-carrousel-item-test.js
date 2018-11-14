import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_TITLE = 'Default title';
const DEFAULT_CONTENT = 'Lorem ipsum dolor';

module('Integration | Component | uni carrousel item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-carrousel-item}}`);

    assert.dom('.uni-carrousel__container__item').exists();
  });

  test('it renders title', async function(assert) {
    assert.expect(2);

    this.set('title', DEFAULT_TITLE);
    this.set('content', DEFAULT_CONTENT);

    await render(hbs`{{uni-carrousel-item title=title content=content}}`);

    assert.dom('.uni-carrousel__container__item__title').hasText(DEFAULT_TITLE);
    assert.dom('.uni-carrousel__container__item__content').hasText(DEFAULT_CONTENT);
  });
});
