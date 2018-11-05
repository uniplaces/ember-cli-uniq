import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_PLACEHOLDER = 'placeholder';
const DEFAULT_VALUE = 'default value';

module('Integration | Component | uni textarea', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    this.set('placeholder', DEFAULT_PLACEHOLDER);
    this.set('value', DEFAULT_VALUE);

    await render(hbs`
      {{#uni-textarea placeholder=placeholder value=value}}
        component
      {{/uni-textarea}}`);

    assert.dom('.uni-textarea').exists();
  });
});
