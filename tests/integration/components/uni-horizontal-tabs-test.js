import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-horizontal-tabs', 'Integration | Component | uni horizontal tabs', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{uni-horizontal-tabs}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders default option', function(assert) {
  this.set('options', ['a', 'b', 'c']);

  this.render(hbs`
    {{#uni-horizontal-tabs options=options as |option|}}
      {{option}}
    {{/uni-horizontal-tabs}}
  `);

  assert.equal(this.$().text().trim().replace(/\s/g, ''), 'abca');
});

test('it renders option', function(assert) {
  this.set('currentTab', 1);
  this.set('options', ['a', 'b', 'c']);

  this.render(hbs`
    {{#uni-horizontal-tabs currentTab=currentTab options=options as |option|}}
      {{option}}
    {{/uni-horizontal-tabs}}
  `);

  assert.equal(this.$().text().trim().replace(/\s/g, ''), 'abcb');
});
