import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-alert', 'Integration | Component | uni alert', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{uni-alert}}`);

  assert.equal(this.$().text().trim(), '');
  assert.notEqual(this.$(), '');
});

test('it renders content', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#uni-alert}}
      This is some content
    {{/uni-alert}}
  `);

  assert.equal(this.$().text().trim(), 'This is some content');
});
