import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni stars', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders maxStars', async function(assert) {
    this.set('maxStars', 5);
    await render(hbs`{{uni-stars maxStars=maxStars}}`);

    assert.equal(findAll('svg').length, 5);
  });
});
