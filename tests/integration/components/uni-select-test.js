import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, findAll } from 'ember-native-dom-helpers';

moduleForComponent('uni-select', 'Integration | Component | uni select', {
  integration: true,
  beforeEach() {
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
  }
});

test('It renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{uni-select options=options}}`);

  assert.ok(find('.uni-select'), 'It renders the select');
  assert.ok(findAll('.uni-select__option').length, 4, 'It renders the four options');
});

test('It renders with placeholder', function(assert) {
  assert.expect(2);

  this.render(hbs`{{uni-select options=options placeholder=placeholder}}`);

  assert.ok(find('.uni-select'), 'It renders the select');
  assert.ok(findAll('.uni-select__option').length, 5, 'It renders the four options and the placeholder');
});

test('It ignores the placeholder when there is a selected option', function(assert) {
  assert.expect(1);

  this.set('selected', this.get('options.firstObject.key'));
  this.render(hbs`{{uni-select options=options selected=selected placeholder=placeholder}}`);

  assert.ok(findAll('.uni-select__option').length, 4, 'It renders the four options and ignores the placeholder');
});

test('It renders disabled options', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-select options=disabledOptions placeholder=placeholder}}`);

  assert.ok(findAll('.uni-select__option:disabled').length, 2, 'It renders the two disabled options');
});

test('It renders the yielded content', function(assert) {
  assert.expect(this.get('options.length'));

  this.render(hbs`
    {{#uni-select options=options as |option|}}
      {{option.key}}
    {{/uni-select}}
  `);

  let options = findAll('.uni-select__option');

  this.get('options').forEach(({ key }, index) => {
    assert.ok(options[index].textContent.trim(), key, 'It renders the option key as the yielded content');
  });
});

test('It renders placeholder using the useAlias flag', function(assert) {
  assert.expect(2);

  this.set('useAlias', true);

  this.render(hbs`{{uni-select options=aliasOptions useAlias=useAlias placeholder=placeholder}}`);

  assert.equal(this.$('select.uni-select').val(), null);
  assert.equal(find('div.uni-select').textContent.trim(), 'Pick me!');
});

test('It renders the first available value when a placeholder is not provided and the useAlias flag is set to true', function(assert) {
  assert.expect(2);

  this.set('useAlias', true);

  this.render(hbs`{{uni-select options=aliasOptions useAlias=useAlias}}`);

  assert.equal(this.$('select.uni-select').val(), 1);
  assert.equal(find('div.uni-select').textContent.trim(), 'one');
});

test('It renders the alias of the selected option', function(assert) {
  assert.expect(2);

  this.set('useAlias', true);
  this.set('selected', 2);

  this.render(hbs`{{uni-select options=aliasOptions useAlias=useAlias selected=selected placeholder=placeholder}}`);

  assert.equal(this.$('select.uni-select').val(), 2);
  assert.equal(find('div.uni-select').textContent.trim(), 'two');
});
