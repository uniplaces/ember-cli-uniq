import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni checkbox', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-checkbox}}`);

    assert.dom('.uni-checkbox').exists();
  });

  test('it and puts small class', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-checkbox isSmall=true}}`);

    assert.dom('.uni-checkbox').hasClass('uni-checkbox--small');
  });

  test('it renders icon', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-checkbox icon="check"}}`);

    assert.dom('.icon').exists();
  });

  test('it does not mutate isSelected automatically', async function(assert) {
    this.setProperties({ isSelected: false, label: 'This is a label' });

    await render(hbs`{{uni-checkbox isSelected=isSelected label=label}}`);
    await click('.uni-checkbox');

    assert.notOk(this.get('isSelected'), 'it doesn\'t mutate isSelected');
    assert.dom('.uni-checkbox').isNotChecked();
  });

  test('it calls onChange with the new value', async function(assert) {
    assert.expect(4);

    this.setProperties({
      isSelected: false,
      label: 'This is a label',
      onChange: (selected) => {
        assert.ok(true, 'it calls onChange');
        assert.ok(selected, 'it passes the new value to onChange');

        this.set('isSelected', selected);
      }
    });

    await render(hbs`{{uni-checkbox isSelected=isSelected label=label}}`);
    await click('.uni-checkbox');

    assert.ok(this.get('isSelected'), 'it mutates isSelected using DDAU');
    assert.dom('.uni-checkbox').isChecked();
  });
});
