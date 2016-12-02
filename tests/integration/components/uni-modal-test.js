import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_TITLE = 'Uni modal title';

moduleForComponent('uni-modal', 'Integration | Component | uni modal', {
  integration: true
});

test('it does not render', function(assert) {
  assert.expect(1);

  this.set('isOpen', false);

  this.render(hbs`{{uni-modal isOpen=isOpen}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders and renders title', function(assert) {
  assert.expect(2);

  this.set('isOpen', true);
  this.set('title', DEFAULT_TITLE);

  this.render(hbs`{{uni-modal isOpen=isOpen title=title}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('.uni-title').text().trim(), DEFAULT_TITLE);
});

test('it renders content', function(assert) {
  assert.expect(2);

  this.set('isOpen', true);

  this.render(hbs`
    {{#uni-modal isOpen=isOpen}}
      This is content
    {{/uni-modal}}
  `);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$().text().trim(), 'This is content');
});
