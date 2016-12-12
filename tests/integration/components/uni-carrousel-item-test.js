import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_TITLE = 'Default title';
const DEFAULT_CONTENT = 'Lorem ipsum dolor';

moduleForComponent('uni-carrousel-item', 'Integration | Component | uni carrousel item', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-carrousel-item}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders title', function(assert) {
  assert.expect(2);

  this.set('title', DEFAULT_TITLE);
  this.set('content', DEFAULT_CONTENT);

  this.render(hbs`{{uni-carrousel-item title=title content=content}}`);

  assert.equal(this.$('.uni-carrousel__container__item__title').text().trim(), DEFAULT_TITLE);
  assert.equal(this.$('.uni-carrousel__container__item__content').text().trim(), DEFAULT_CONTENT);
});
