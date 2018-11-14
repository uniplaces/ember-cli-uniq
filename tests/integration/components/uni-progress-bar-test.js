import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni progress bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-progress-bar}}`);

    assert.dom('.uni-progress-bar').exists();
  });

  test('it renders step markers', async function(assert) {
    assert.expect(1);

    this.set('steps', 6);

    await render(hbs`{{uni-progress-bar totalStepsCount=steps}}`);

    assert
      .dom('.uni-progress-bar__step')
      .exists({ count: this.get('steps') + 1 });
  });
});
