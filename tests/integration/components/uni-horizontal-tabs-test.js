import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni horizontal tabs', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{uni-horizontal-tabs}}`);

    assert.dom('.uni-horizontal-tabs').exists();
  });

  test('it renders default option', async function(assert) {
    this.set('options', ['a', 'b', 'c']);

    await render(hbs`
      {{#uni-horizontal-tabs options=options as |option|}}
        {{option}}
      {{/uni-horizontal-tabs}}
    `);

    assert.dom('.uni-horizontal-tabs').hasText('a b c a');
  });

  test('it renders option', async function(assert) {
    this.set('currentTab', 1);
    this.set('options', ['a', 'b', 'c']);

    await render(hbs`
      {{#uni-horizontal-tabs currentTab=currentTab options=options as |option|}}
        {{option}}
      {{/uni-horizontal-tabs}}
    `);

    assert.dom('.uni-horizontal-tabs').hasText('a b c b');
  });
});
