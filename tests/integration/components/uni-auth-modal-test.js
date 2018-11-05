import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni auth modal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    this.set('isOpen', true);

    await render(hbs`{{uni-auth-modal isOpen=isOpen}}`);

    assert.dom('.uni-auth-modal').exists();
    assert.dom('.uni-auth-modal').hasText('');
  });

  test('it renders yielded content', async function(assert) {
    assert.expect(1);

    this.set('isOpen', true);

    await render(hbs`
      {{#uni-auth-modal isOpen=isOpen}}
        This is the content
      {{/uni-auth-modal}}
    `);

    assert.dom('.uni-auth-modal').hasText('This is the content');
  });
});
