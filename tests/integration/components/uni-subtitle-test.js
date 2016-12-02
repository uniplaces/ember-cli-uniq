import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_SUBTITLE = 'Default subtitle';

moduleForComponent('uni-subtitle', 'Integration | Component | uni subtitle', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.set('subtitle', DEFAULT_SUBTITLE);

  this.render(hbs`{{uni-subtitle subtitle=subtitle}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('.uni-subtitle').text().trim(), DEFAULT_SUBTITLE);
});
