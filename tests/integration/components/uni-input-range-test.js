import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni input range', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{uni-input-range}}`);

    assert.notEqual(find('.uni-input-range').textContent.trim(), '');
    assert.dom('.uni-input-range').hasText('- +');
  });

  test('it renders text', async function(assert) {
    assert.expect(1);

    this.set('value', 10);
    this.set('target', 'beds');

    await render(hbs`{{uni-input-range value=value target=target}}`);

    assert.notEqual(find('.uni-input-range').textContent.trim(), '');
  });

  test('it renders with small modifier', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-input-range isSmall=true}}`);

    assert.ok(find('.uni-input-range').className.includes('--small'));
  });

  test('it renders with editable modifier', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-input-range isEditable=true}}`);

    assert.ok(find('.uni-input-range').className.includes('--editable'));
  });
});
