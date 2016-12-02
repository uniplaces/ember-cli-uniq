import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_TITLE = 'Sign Up';

moduleForComponent('uni-signup', 'Integration | Component | uni signup', {
  integration: true
});

test('it renders nothing', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-signup}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders title', function(assert) {
  assert.expect(1);

  this.set('title', DEFAULT_TITLE);

  this.render(hbs`{{uni-signup title=title}}`);

  assert.equal(this.$().text().trim(), DEFAULT_TITLE);
});
