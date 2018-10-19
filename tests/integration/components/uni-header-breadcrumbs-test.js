import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni header breadcrumbs', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    this.set('step', 'First');
    this.set('description', 'This is a description');

    await render(hbs`{{uni-header-breadcrumbs step=step description=description}}`);

    assert.dom('.uni-header__breadcrumb__step').hasText('First');
    assert.dom('.uni-header__breadcrumb__description').hasText('This is a description');
  });
});
