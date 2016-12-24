import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const { $ } = Ember;

moduleForComponent('uni-auth-modal', 'Integration | Component | uni auth modal', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.set('isOpen', true);

  this.render(hbs`{{uni-auth-modal isOpen=isOpen}}`);

  assert.equal(this.$().text().trim(), '');
  assert.notEqual(this.$(), '');
});

test('it renders yielded content', function(assert) {
  assert.expect(1);

  this.set('isOpen', true);

  this.render(hbs`
    {{#uni-auth-modal isOpen=isOpen}}
      This is the content
    {{/uni-auth-modal}}
  `);

  assert.equal($('.uni-auth-modal').text().trim(), 'This is the content');
});
