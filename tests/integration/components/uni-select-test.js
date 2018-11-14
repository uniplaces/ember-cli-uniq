import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { findAll, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni select', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.set('options', [
      { key: 'pt', value: 'Portugal' },
      { key: 'it', value: 'Italy' },
      { key: 'nl', value: 'Nederlands' },
      { key: 'en', value: 'England' }
    ]);
    this.set('disabledOptions', [
      { key: 1, value: 'Uno', disabled: true },
      { key: 2, value: 'Dos', disabled: true },
      { key: 3, value: 'Tres', disabled: false },
      { key: 4, value: 'Cuatro' }
    ]);
    this.set('aliasOptions', [
      { key: 1, value: 'long explanation for one', alias: 'one' },
      { key: 2, value: 'long explanation for two', alias: 'two' }
    ]);
    this.set('placeholder', 'Pick me!');
    this.set('groups', [
      {
        key: 'g-1',
        value: 'group 1',
        options: [
          { key: 'pt', value: 'Portugal' },
          { key: 'it', value: 'Italy' }
        ]
      },
      {
        key: 'g-2',
        value: 'group 2',
        options: [
          { key: 'nl', value: 'Nederlands' },
          { key: 'en', value: 'England' }
        ]
      }
    ]);
    this.set('disabledOptionsGroups', [
      {
        key: 'g-1',
        value: 'group 1',
        options: [
          { key: 'pt', value: 'Portugal', disabled: true },
          { key: 'it', value: 'Italy', disabled: true }
        ]
      },
      {
        key: 'g-2',
        value: 'group 2',
        options: [
          { key: 'nl', value: 'Nederlands', disabled: false },
          { key: 'en', value: 'England' }
        ]
      }
    ]);
    this.set('aliasGroups', [
      {
        key: 'g-1',
        value: 'group 1',
        options: [
          { key: 1, value: 'long explanation for one', alias: 'one' },
          { key: 2, value: 'long explanation for two', alias: 'two' }
        ]
      }
    ]);
  });

  test('It renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{uni-select options=options}}`);

    assert.dom('.uni-select').exists();
    assert.dom('.uni-select__option').exists({ count: 4 });
  });

  test('It renders groups', async function(assert) {
    assert.expect(3);

    await render(hbs`{{uni-select options=groups}}`);

    assert.dom('.uni-select').exists();
    assert.dom('.uni-select__option').exists({ count: 4 });
    assert.dom('optgroup').exists({ count: 2 });
  });

  test('It renders with placeholder', async function(assert) {
    assert.expect(2);

    await render(hbs`{{uni-select options=options placeholder=placeholder}}`);

    assert.dom('.uni-select').exists();
    assert.dom('option').exists({ count: 5 });
  });

  test('It renders groups with placeholder', async function(assert) {
    assert.expect(3);

    await render(hbs`{{uni-select options=groups placeholder=placeholder}}`);

    assert.dom('.uni-select').exists();
    assert.dom('option').exists({ count: 5 });
    assert.dom('optgroup').exists({ count: 2 });
  });

  test('It ignores the placeholder when there is a selected option', async function(assert) {
    assert.expect(1);

    this.set('selected', this.get('options.firstObject.key'));
    await render(
      hbs`{{uni-select options=options selected=selected placeholder=placeholder}}`
    );

    assert.dom('.uni-select__option').exists({ count: 4 });
  });

  test('It ignores the placeholder when there is a selected option - groups', async function(assert) {
    assert.expect(2);

    this.set('selected', this.get('groups[0].options.firstObject.key'));
    await render(
      hbs`{{uni-select options=groups selected=selected placeholder=placeholder}}`
    );

    assert.dom('.uni-select__option').exists({ count: 4 });
    assert.dom('optgroup').exists({ count: 2 });
  });

  test('It renders disabled options', async function(assert) {
    assert.expect(1);

    await render(
      hbs`{{uni-select options=disabledOptions placeholder=placeholder}}`
    );

    assert.dom('.uni-select__option:disabled').exists({ count: 2 });
  });

  test('It renders disabled options - groups', async function(assert) {
    assert.expect(1);

    await render(
      hbs`{{uni-select options=disabledOptionsGroups placeholder=placeholder}}`
    );

    assert.dom('.uni-select__option:disabled').exists({ count: 2 });
  });

  test('It renders the yielded content', async function(assert) {
    assert.expect(this.get('options.length'));

    await render(hbs`
      {{#uni-select options=options as |option|}}
        {{option.key}}
      {{/uni-select}}
    `);

    let options = findAll('.uni-select__option');

    this.get('options').forEach(({ key }, index) => {
      assert.dom(options[index]).hasText(key);
    });
  });

  test('It renders the yielded content - groups', async function(assert) {
    assert.expect(this.get('options.length'));

    await render(hbs`
      {{#uni-select options=groups as |option|}}
        {{option.key}}
      {{/uni-select}}
    `);

    let options = findAll('.uni-select__option');

    this.get('options').forEach(({ key }, index) => {
      assert.dom(options[index]).hasText(key);
    });
  });

  test('It renders placeholder using the useAlias flag', async function(assert) {
    assert.expect(2);

    this.set('useAlias', true);

    await render(
      hbs`{{uni-select options=aliasOptions useAlias=useAlias placeholder=placeholder}}`
    );

    assert.dom('select.uni-select').hasNoValue();
    assert.dom('div.uni-select').hasText('Pick me!');
  });

  test('It renders placeholder using the useAlias flag - groups', async function(assert) {
    assert.expect(2);

    this.set('useAlias', true);

    await render(
      hbs`{{uni-select options=aliasGroups useAlias=useAlias placeholder=placeholder}}`
    );

    assert.dom('select.uni-select').hasNoValue();
    assert.dom('div.uni-select').hasText('Pick me!');
  });

  test('It renders the first available value when a placeholder is not provided and the useAlias flag is set to true', async function(assert) {
    assert.expect(2);

    this.set('useAlias', true);

    await render(hbs`{{uni-select options=aliasOptions useAlias=useAlias}}`);

    assert.dom('select.uni-select').hasValue('1');
    assert.dom('div.uni-select').hasText('one');
  });

  test('It renders the first available value when a placeholder is not provided and the useAlias flag is set to true - groups', async function(assert) {
    assert.expect(2);

    this.set('useAlias', true);

    await render(hbs`{{uni-select options=aliasGroups useAlias=useAlias}}`);

    assert.dom('select.uni-select').hasValue('1');
    assert.dom('div.uni-select').hasText('one');
  });

  test('It renders the alias of the selected option', async function(assert) {
    assert.expect(2);

    this.set('useAlias', true);
    this.set('selected', 2);

    await render(
      hbs`{{uni-select options=aliasOptions useAlias=useAlias selected=selected placeholder=placeholder}}`
    );

    assert.dom('select.uni-select').hasValue('2');
    assert.dom('div.uni-select').hasText('two');
  });

  test('It renders the alias of the selected option - groups', async function(assert) {
    assert.expect(2);

    this.set('useAlias', true);
    this.set('selected', 2);

    await render(
      hbs`{{uni-select options=aliasGroups useAlias=useAlias selected=selected placeholder=placeholder}}`
    );

    assert.dom('select.uni-select').hasValue('2');
    assert.dom('div.uni-select').hasText('two');
  });
});
