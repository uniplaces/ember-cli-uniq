import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_TITLE = 'Default title';
const DEFAULT_SUBTITLE = 'Default subtitle';

moduleForComponent('uni-subheader', 'Integration | Component | uni subheader', {
  integration: true
});

test('it renders nothing', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-subheader}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders title', function(assert) {
  assert.expect(2);

  this.set('title', DEFAULT_TITLE);

  this.render(hbs`{{uni-subheader title=title}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$().text().trim(), DEFAULT_TITLE);
});

test('it renders subtitle', function(assert) {
  assert.expect(2);

  this.set('title', DEFAULT_TITLE);
  this.set('subtitle', DEFAULT_SUBTITLE);

  this.render(hbs`{{uni-subheader title=title subtitle=subtitle}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('.uni-subheader__caption').text().trim(), DEFAULT_SUBTITLE);
});
