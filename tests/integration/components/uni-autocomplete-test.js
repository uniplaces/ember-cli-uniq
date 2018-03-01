import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { fillIn, keyEvent } from 'ember-native-dom-helpers';
import { A } from '@ember/array';

moduleForComponent('uni-autocomplete', 'Integration | Component | uni autocomplete', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-autocomplete}}`);

  assert.equal(this.$().text().trim(), '');
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

  this.render(hbs`
    {{#uni-autocomplete
      options=options
      searchTextValues=searchTextValues
      onSelected=onSelected as |optionSearchable|}}
      {{optionSearchable.option}}
    {{/uni-autocomplete}}
  `);

  let letterAKeyCode = 65;

  await fillIn('.uni-input', 'A');
  await keyEvent('.uni-input', 'keydown', letterAKeyCode);
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

  this.render(hbs`
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
  await keyEvent('.uni-input', 'keydown', letterAKeyCode);
});
