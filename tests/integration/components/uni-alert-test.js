import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni alert', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{uni-alert}}`);

    assert.dom('.uni-alert').exists();
    assert.dom('.uni-alert').hasText('');
  });

  test('it renders content', async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{#uni-alert}}
        This is some content
      {{/uni-alert}}
    `);

    assert.dom('.uni-alert').hasText('This is some content');
  });
});
