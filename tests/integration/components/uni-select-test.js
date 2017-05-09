import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-select', 'Integration | Component | uni select', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  let options = [
    { key: 'pt', value: 'Portugal' },
    { key: 'it', value: 'Italy' },
    { key: 'nl', value: 'Nederlands' },
    { key: 'en', value: 'England' }
  ];
  this.set('options', options);

  this.render(hbs`{{uni-select options=options}}`);

  assert.notEqual(this.$().text().trim(), '');
});

test('it renders placeholder - useAlias', function(assert) {
  assert.expect(2);

  let options = [
    { key: 1, value: 'long explanation for one', alias: 'one' },
    { key: 2, value: 'long explanation for two', alias: 'two' }
  ];
  this.set('options', options);
  this.set('useAlias', true);
  this.set('placeholder', 'Pick me!');

  this.render(hbs`{{uni-select options=options useAlias=useAlias placeholder=placeholder}}`);

  assert.equal(this.$('select.uni-select').val(), null);
  assert.equal(this.$('div.uni-select').text().trim(), 'Pick me!');
});

test('it renders right value with no placeholder - useAlias', function(assert) {
  assert.expect(2);

  let options = [
    { key: 1, value: 'long explanation for one', alias: 'one' },
    { key: 2, value: 'long explanation for two', alias: 'two' }
  ];
  this.set('options', options);
  this.set('useAlias', true);

  this.render(hbs`{{uni-select options=options useAlias=useAlias}}`);

  assert.equal(this.$('select.uni-select').val(), 1);
  assert.equal(this.$('div.uni-select').text().trim(), 'one');
});

test('it renders selected alias - useAlias', function(assert) {
  assert.expect(2);

  let options = [
    { key: 1, value: 'long explanation for one', alias: 'one' },
    { key: 2, value: 'long explanation for two', alias: 'two' }
  ];
  this.set('options', options);
  this.set('useAlias', true);
  this.set('placeholder', 'Pick me!');
  this.set('selected', 2);

  this.render(hbs`{{uni-select options=options useAlias=useAlias selected=selected placeholder=placeholder}}`);

  assert.equal(this.$('select.uni-select').val(), 2);
  assert.equal(this.$('div.uni-select').text().trim(), 'two');
});
