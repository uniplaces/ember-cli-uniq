import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni multi selector', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders 2 options and selects given one', async function(assert) {
    assert.expect(2);

    let options = [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' }
    ];
    let groupValue = 'female';

    this.set('options', options);
    this.set('name', 'gender');
    this.set('groupValue', groupValue);

    await render(
      hbs`{{uni-multi-selector name=name groupValue=groupValue options=options}}`
    );

    assert.dom('.uni-multi-selector__button').exists({ count: 2 });
    assert.dom('input:checked').hasValue(groupValue);
  });

  test('it renders 3 options and selects default one', async function(assert) {
    assert.expect(2);

    let options = [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'unknown', label: 'unknown' }
    ];

    this.set('options', options);
    this.set('name', 'gender');

    await render(hbs`{{uni-multi-selector name=name options=options}}`);

    assert.dom('.uni-multi-selector__button').exists({ count: 3 });
    assert.dom('input:checked').hasValue(options[0].value);
  });

  test('it renders options without setting default state', async function(assert) {
    assert.expect(2);

    let options = [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'unknown', label: 'unknown' }
    ];

    this.set('options', options);
    this.set('name', 'gender');

    await render(
      hbs`{{uni-multi-selector name=name hasDefaultState=false options=options}}`
    );

    assert.dom('.uni-multi-selector__button').exists({ count: 3 });
    assert.dom('input:checked').doesNotExist();
  });
});
