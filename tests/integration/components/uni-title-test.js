import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_TITLE = 'Default title';
const DEFAULT_SUBTITLE = 'Default subtitle';

moduleForComponent('uni-title', 'Integration | Component | uni title', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.set('title', DEFAULT_TITLE);
  this.set('subtitle', DEFAULT_SUBTITLE);

  this.render(hbs`{{uni-title title=title subtitle=subtitle}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('.uni-subtitle').text().trim(), DEFAULT_SUBTITLE);
});
