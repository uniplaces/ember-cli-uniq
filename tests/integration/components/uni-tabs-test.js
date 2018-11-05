import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_LABEL = 'uni tab label';

module('Integration | Component | uni tabs', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-tabs}}`);

    assert.dom('.uni-tabs').exists();
  });

  test('it renders and renders items', async function(assert) {
    assert.expect(1);

    this.set('tabs', [{ label: DEFAULT_LABEL, url: '' }]);

    await render(hbs`{{uni-tabs tabs=tabs}}`);

    assert.dom('.uni-tabs__wrapper__item a').hasText(DEFAULT_LABEL);
  });

  test('it renders yielded content', async function(assert) {
    assert.expect(1);

    this.set('tabs', [{ label: '', url: '', text: DEFAULT_LABEL }]);

    await render(hbs`
      {{#uni-tabs tabs=tabs as |tab|}}
        {{tab.text}}
      {{/uni-tabs}}`);

    assert.dom('.uni-tabs__wrapper__item a').hasText(DEFAULT_LABEL);
  });
});
