import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni checkbox', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{uni-checkbox}}`);

    assert.dom('.uni-checkbox').exists();
  });

  test('it and puts small class', async function(assert) {
    await render(hbs`{{uni-checkbox isSmall=true}}`);

    assert.dom('.uni-checkbox').hasClass('uni-checkbox--small');
  });

  test('it renders icon', async function(assert) {
    await render(hbs`{{uni-checkbox icon="check"}}`);

    assert.dom('.icon').exists();
  });

  test('it does not mutate isSelected automatically', async function(assert) {
    this.setProperties({ isSelected: false, label: 'This is a label' });

    await render(hbs`{{uni-checkbox isSelected=isSelected label=label}}`);
    await click('.uni-checkbox');

    assert.notOk(this.get('isSelected'), 'it doesn\'t mutate isSelected');
    assert.dom('.uni-checkbox').isChecked('it doesn\'t prevent default');
  });

  test('it calls onChange with the new value', async function(assert) {
    assert.expect(5);

    this.setProperties({
      isSelected: false,
      label: 'This is a label',
      onChange: (selected, ev) => {
        assert.ok(true, 'it calls onChange');
        assert.ok(selected, 'it passes the new value to onChange');
        assert.ok(ev, 'it passes the event to onChange')

        this.set('isSelected', selected);
      }
    });

    await render(hbs`{{uni-checkbox isSelected=isSelected label=label onChange=onChange}}`);
    await click('.uni-checkbox');

    assert.ok(this.get('isSelected'), 'it mutates isSelected using DDAU');
    assert.dom('.uni-checkbox').isChecked();
  });
});
