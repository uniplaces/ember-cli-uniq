import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    this.set('label', 'This is a label');

    await render(hbs`{{uni-button label=label}}`);

    assert.dom('.uni-button').hasText('This is a label');
  });

  test('it renders yield content', async function(assert) {
    assert.expect(4);

    this.set('label', 'This label should not show');

    await render(hbs`
      {{#uni-button label=label}}
        <h1>Click on me!</h1>
      {{/uni-button}}
    `);

    assert.dom('.uni-button').exists();
    assert.dom('.uni-button').doesNotIncludeText('This label should not show');
    assert.dom('h1').exists();
    assert.dom('h1').hasText('Click on me!');
  });
});
