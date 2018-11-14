import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni button dropdown item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    let expectedValue = 'Portugal';
    let expectedDescription = 'Nice country';
    this.set('option', {
      key: 'pt',
      value: expectedValue,
      description: expectedDescription
    });
    this.set('onClick', key => {
      return key;
    });

    await render(hbs`{{uni-button-dropdown-item onClick=onClick option=option}}`);

    assert.dom('.uni-button-dropdown__list__item--value').hasText(expectedValue);
    assert.dom('.uni-button-dropdown__list__item--description').hasText(expectedDescription);
  });

  test('it executes action when clicked', async function(assert) {
    assert.expect(1);

    let expectedKey = 'pt';

    this.set('clickAction', key => {
      assert.equal(key, expectedKey);
    });

    this.set('option', {
      key: expectedKey,
      value: 'Portugal',
      description: 'Nice country'
    });

    await render(hbs`{{uni-button-dropdown-item option=option onClick=clickAction}}`);

    await click('.uni-button-dropdown__list__item');
  });
});
