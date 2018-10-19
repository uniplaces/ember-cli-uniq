import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, triggerKeyEvent, triggerEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { A } from '@ember/array';

module('Integration | Component | uni autocomplete', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-autocomplete}}`);

    assert.dom('.uni-autocomplete').exists();
  });

  test('it works with the default filter function', async function(assert) {
    assert.expect(1);

    this.setProperties({
      searchTextValues: (option) => [option],
      options: ['A', 'B', 'C', 'D'],
      onSelected: () => {
        assert.ok(true);
      }
    });

    await render(hbs`
      {{#uni-autocomplete
        options=options
        searchTextValues=searchTextValues
        onSelected=onSelected as |optionSearchable|}}
        {{optionSearchable.option}}
      {{/uni-autocomplete}}
    `);

    let letterAKeyCode = 65;

    await fillIn('.uni-input', 'A');
    await triggerKeyEvent('.uni-input', 'keydown', letterAKeyCode);
  });

  test('it works with a custom filter function', async function(assert) {
    assert.expect(8);

    this.setProperties({
      searchTextValues: (option) => [option],
      options: ['A', 'B', 'C', 'D'],
      filterFunction: (getSearchTextValues, option) => {
        assert.equal(typeof getSearchTextValues, 'function');
        assert.ok(this.get('options').includes(option));

        return A(['yo']);
      },
      onSelected: () => {}
    });

    await render(hbs`
      {{#uni-autocomplete
        options=options
        searchTextValues=searchTextValues
        filterFunction=filterFunction
        onSelected=onSelected as |optionSearchable|}}
        {{optionSearchable.option}}
      {{/uni-autocomplete}}
    `);

    let letterAKeyCode = 65;

    await fillIn('.uni-input', 'A');
    await triggerKeyEvent('.uni-input', 'keydown', letterAKeyCode);
  });

  test('It selects a highlighted option when focusing out', async function(assert) {
    assert.expect(1);

    this.setProperties({ searchTextValues: (option) => [option], options: ['ABC', 'A', 'B', 'C'] });

    await render(hbs`{{uni-autocomplete options=options searchTextValues=searchTextValues}}`);

    await fillIn('input', 'ab');
    await triggerEvent('input', 'blur');

    assert.dom('input').hasValue('Abc');
  });
});
